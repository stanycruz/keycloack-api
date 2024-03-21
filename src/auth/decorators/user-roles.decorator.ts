import { CustomDecorator, SetMetadata } from '@nestjs/common';
import { UserRole } from './user-roles.enum';

export const UserRoles: (...roles: UserRole[]) => CustomDecorator<string> = (
  ...roles: UserRole[]
) => SetMetadata('roles', roles);
