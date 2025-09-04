import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { Request } from 'express';
import { IPagination } from './interfaces/pagination.interface';

export const PaginationParams = createParamDecorator(
  (data, ctx: ExecutionContext): IPagination => {
    const req: Request = ctx.switchToHttp().getRequest();
    const pageRaw: string = (req.query.page as string) || '1';
    const page = parseInt(pageRaw);
    if (isNaN(page) || page < 1) {
      throw new BadRequestException('Invalid page parameter');
    }
    const sizeRaw: string = (req.query.size as string) || '10';
    const size = parseInt(sizeRaw);
    if (isNaN(size) || size < 1) {
      throw new BadRequestException('Invalid size parameter');
    }
    if (size > 100) {
      throw new BadRequestException(
        'Invalid pagination params: Max size is 100',
      );
    }

    const offset = (page - 1) * size;
    return {
      page,
      offset,
      size,
    };
  },
);
