import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { KeycloakService } from '../keycloak/keycloak.service';
import { UserRole } from '../auth/decorators/user-roles.enum'; // Importe o enum UserRole

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private keycloakService: KeycloakService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<UserRole[]>('roles', context.getHandler()); // Ajuste para UserRole[]

    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    const hasPermission = await this.keycloakService.checkUserRoles(
      user,
      roles,
    );
    return hasPermission;
  }
}
