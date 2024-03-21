import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleware } from './auth/auth.middleware';
import { AuthService } from './auth/auth.service';
import { KeycloakService } from './keycloak/keycloak.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AuthService, KeycloakService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
