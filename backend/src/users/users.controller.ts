import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationParams } from 'src/utils/decorators/pagination/paginationParams';
import { SortingParams } from 'src/utils/decorators/sortingParams/sortingParams';
import { FilteringParams } from 'src/utils/decorators/filteringParms/filteringParms';
import type { IPagination } from 'src/utils/decorators/pagination/interfaces/pagination.interface';
import type { Sorting } from 'src/utils/decorators/sortingParams/interfaces/sorting.interface';
import type { Filtering } from 'src/utils/decorators/filteringParms/interfaces/filtering.interface';
import { IDParamDto } from './dto/IDParam.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(
    @PaginationParams() paginationParams: IPagination,
    @SortingParams(['username']) sort?: Sorting,
    @FilteringParams(['username', '_id', 'role']) filter?: Filtering,
  ) {
    return await this.usersService.findAll(paginationParams, sort, filter);
  }

  @Get(':id')
  async findOne(@Param() { id }: IDParamDto) {
    const _id = new Types.ObjectId(id);
    return await this.usersService.findOne({ _id });
  }

  @Patch(':id')
  async update(
    @Param() { id }: IDParamDto,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService.update(
      new Types.ObjectId(id),
      updateUserDto,
    );
  }

  @Delete(':id')
  async remove(@Param() { id }: IDParamDto) {
    return await this.usersService.delete(new Types.ObjectId(id));
  }
}
