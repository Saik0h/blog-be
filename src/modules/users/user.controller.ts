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
import { isPublic } from 'src/common/decorators/is-public.decorator';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  // -------------------> Retorna todos os usuários
  @Get()
  @isPublic()
  findAll() {
    return this.userService.findAll();
  }

  // -------------------> Retorna um único usuário

  @Get(':id')
  @isPublic()
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  // -------------------> Atualiza um usuário

  @Patch(':id')
  @CurrentUser()
  update(
    @Param('id') id: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.userService.update(+id, updateUserDto);
  }
  // -------------------> Atualiza senha de um usuário

  @Patch(':id/change-password')
  @CurrentUser()
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
