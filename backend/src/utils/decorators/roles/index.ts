import { SetMetadata } from '@nestjs/common';

export enum Roles {
  USER = 'user',
  ADMIN = 'admin',
}

export const ROLES_KEY = 'roles';
export const Role = (...roles: Roles[]) => SetMetadata(ROLES_KEY, roles);
