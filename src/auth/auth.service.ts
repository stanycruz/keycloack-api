import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateToken(token: string): Promise<any> {
    // Valide o token JWT com o Keycloak e retorne os dados do usuário
    // Implemente a lógica de validação do token aqui
    return {
      id: 1,
      username: 'user',
      role: 'owner', // ou 'grocery', 'mantainer' conforme o caso
    };
  }
}
