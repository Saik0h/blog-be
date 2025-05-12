import { Controller, Get, Param, Patch, Body, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from 'generated/prisma';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Endpoint responsável por retornar todos os usuários
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // Endpoint responsável por buscar e retornar um único usuário pelo ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  // Endpoint responsável por buscar e retornar posts de um autor específico pelo ID
  @Get(':id/posts')
  findByAuthor(@Param('id') id: string) {
    return this.userService.findAllByAuthor(+id);
  }

  // Endpoint responsável por buscar e atualizar os dados de um usuário pelo ID
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.userService.update(+id, updateUserDto);
  }

  // Endpoint responsável por buscar e deletar um usuário específico pelo ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
