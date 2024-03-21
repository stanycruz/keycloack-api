import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserRoles } from 'src/auth/decorators/user-roles.decorator';
import { UserRole } from 'src/auth/decorators/user-roles.enum';
import { RolesGuard } from 'src/roles/roles.guard';

@Controller('products')
export class ProductsController {
  @Get()
  @UseGuards(RolesGuard)
  @UserRoles(UserRole.OWNER, UserRole.GROCERY)
  getAllProducts() {
    // Lógica para retornar todos os produtos
  }

  @Get(':id')
  @UseGuards(RolesGuard)
  @UserRoles(UserRole.OWNER, UserRole.GROCERY, UserRole.MAINTAINER)
  getProductById(@Param('id') id: string) {
    // Lógica para retornar um produto específico
  }
}
