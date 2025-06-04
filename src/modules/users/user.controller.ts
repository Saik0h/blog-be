import {
  Controller,
  Get,
  Param,
  Patch,
  Body,
  Delete,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from 'generated/prisma';
import { Request } from 'express';
import { ChangePasswordDto } from './dto/change-password.dto';
import { AllowPublicAccess } from 'src/common/decorators/allow-public-access.decorator';
import { AuthenticatedAccess } from 'src/common/decorators/authenticated-access.decorator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  // -------------------> Retorna todos os usuários
  @Get()
  @AllowPublicAccess()
  findAll() {
    return this.userService.findAll();
  }

  // -------------------> Retorna um único usuário

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  // -------------------> Retorna todos os posts de um usuário específico

  @Get(':id/posts')
  @AuthenticatedAccess()
  findByAuthor(@Param('id') id: string) {
    return this.userService.findAllByAuthor(+id);
  }

  // -------------------> Atualiza um usuário

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.userService.update(+id, updateUserDto);
  }
  // -------------------> Atualiza senha de um usuário

  @Patch(':id/change-password')
  updatePassword(
    @Body() passwordPayload: ChangePasswordDto,
    @Req() req: Request,
  ) {
    return this.userService.changePassword(req, passwordPayload);
  }
  // -------------------> Deleta usuário

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
