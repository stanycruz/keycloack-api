import { Injectable } from '@nestjs/common';
import { keycloakConfig } from '../config/keycloak.config';
import * as KeycloakConnect from 'keycloak-connect';
import { UserRole } from 'src/auth/decorators/user-roles.enum';

@Injectable()
export class KeycloakService {
  private readonly keycloak: KeycloakConnect.Keycloak;

  constructor() {
    this.keycloak = new KeycloakConnect({ store: true }, keycloakConfig) as any;
  }

  getKeycloakInstance(): KeycloakConnect.Keycloak {
    return this.keycloak;
  }

  checkUserRoles(userRoles: UserRole[], requiredRoles: UserRole[]): boolean {
    // Use o enum UserRoles nos parâmetros
    return requiredRoles.every((role) => userRoles.includes(role));
  }
}
