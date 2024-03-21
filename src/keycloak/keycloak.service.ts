import { Injectable } from '@nestjs/common';
import { keycloakConfig } from '../config/keycloak.config';
import * as KeycloakConnect from 'keycloak-connect';

@Injectable()
export class KeycloakService {
  private readonly keycloak: KeycloakConnect.Keycloak;

  constructor() {
    this.keycloak = new KeycloakConnect({ store: true }, keycloakConfig) as any;
  }

  getKeycloakInstance(): KeycloakConnect.Keycloak {
    return this.keycloak;
  }
}
