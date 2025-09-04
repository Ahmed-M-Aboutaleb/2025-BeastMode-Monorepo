import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as argon from 'argon2';

import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model, Types } from 'mongoose';
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
    const createdUser = new this.userModel(createUserDto);
    createdUser.passwordHash = await this.hashPassword(createUserDto.password);
    const savedUser = await createdUser.save();
    return savedUser;
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

  async findOne(filters?: IUsersFilters): Promise<IUser> {
    const user = await this.userModel.findOne(filters).exec();
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
}
