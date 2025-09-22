import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles, ROLES_KEY } from '../decorators/roles';
import type { Request } from 'express';
import IUser from 'src/users/interfaces/IUser';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Roles[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const request: Request = context.switchToHttp().getRequest();
    const user: IUser = request.user as IUser;
    return (
      user &&
      user.roles &&
      requiredRoles.some((role) => user.roles.includes(role))
    );
  }
}
