import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as argon from 'argon2';

import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model, Types } from 'mongoose';
import { MongoServerError } from 'mongodb';
import IUser from './interfaces/IUser';
import {
  IPagination,
  PaginatedResource,
} from 'src/utils/decorators/pagination/interfaces/pagination.interface';
import { Sorting } from 'src/utils/decorators/sortingParams/interfaces/sorting.interface';
import { Filtering } from 'src/utils/decorators/filteringParms/interfaces/filtering.interface';
import { IUsersFilters } from './interfaces/usersFilter.interface';
import { getOrder } from 'src/utils/getOrder';
import { getWhere } from 'src/utils/getWhere';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const doc = await this.buildCreateUserDoc(createUserDto);
    try {
      const created = await this.userModel.create(doc);
      const user = await this.userModel
        .findById(created._id)
        .select({ passwordHash: 0 })
        .lean()
        .exec();
      return user as User;
    } catch (err) {
      if (this.isDuplicateEmailError(err)) {
        throw new ConflictException('Email already in use');
      }
      throw err;
    }
  }
  async findAll(
    { size, offset }: IPagination,
    sort?: Sorting,
    filter?: Filtering,
  ): Promise<PaginatedResource<Partial<IUser>>> {
    const order = getOrder(sort);
    const where = getWhere(filter);
    const users = await this.userModel
      .find(where)
      .sort(order)
      .skip(offset)
      .limit(size || 10)
      .exec();
    return {
      totalItems: users.length,
      items: users,
      page: 1,
      size: users.length,
    };
  }

  async findOne(filters?: IUsersFilters, select?: string): Promise<IUser> {
    const query = this.userModel.findOne(filters ?? {});
    if (select) {
      query.select(select);
    }
    const user = await query.lean<IUser>().exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(
    id: Types.ObjectId,
    updateUserDto: UpdateUserDto,
  ): Promise<IUser> {
    updateUserDto.email = await this.findOne({ _id: id }).then((u) => u.email);
    const user = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    if (!user) {
      throw new NotFoundException(`User with id ${id.toString()} not found`);
    }
    return user;
  }

  async delete(id: Types.ObjectId): Promise<IUser> {
    const user = await this.userModel.findByIdAndDelete(id).exec();
    if (!user) {
      throw new NotFoundException(`User with id ${id.toString()} not found`);
    }
    return user;
  }

  private async hashPassword(password: string): Promise<string> {
    return await argon.hash(password);
  }

  private async buildCreateUserDoc(
    dto: CreateUserDto,
  ): Promise<Partial<User> & { passwordHash: string }> {
    const { password, email, ...rest } = dto as unknown as {
      password: string;
      email: string;
      [k: string]: unknown;
    };
    return {
      ...(rest as Partial<User>),
      email: email.trim().toLowerCase(),
      passwordHash: await this.hashPassword(password),
    } as Partial<User> & { passwordHash: string };
  }

  private isDuplicateEmailError(err: unknown): boolean {
    if (!(err instanceof MongoServerError) || err.code !== 11000) return false;
    const kp: Record<string, unknown> | undefined = (
      err as MongoServerError & { keyPattern?: Record<string, unknown> }
    ).keyPattern;
    return Boolean(kp && 'email' in kp);
  }
}
