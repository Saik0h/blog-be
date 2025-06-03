import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Get,
  Res,
} from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { IDecodedJWT } from 'src/common/utils/decoded';
import { Access } from 'src/common/decorators/access-level-decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // -------------------> Rota de Registro de usuário
  @Post('register')
  @Access('restrict')
  register(
    @Body() registerPayload: Prisma.UserCreateInput,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.register(registerPayload, res);
  }

  // -------------------> Rota de login

  @Post('login')
  @Access('public')
  login(
    @Body() loginDto: { username: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.login(loginDto, res);
  }

  // -------------------> Rota responsável por buscar usuário

  @Get('user')
  @Access('authorizedOnly')
  user(@Req() req: Request) {
    return this.authService.getUser(req);
  }

    // -------------------> Rota responsável por buscar usuário

  @Get('status')
  @Access('public')
  status(@Req() req: Request) {
    return this.authService.isThereAUserLoggedIn(req);
  }

  // -------------------> Rota para verificar e e atualizar jwtToken

  @Post('refresh')
  @Access('public')
  refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.refreshTokens(req, res);
  }

  // -------------------> Rota de logout

  @Post('logout')
  @Access('authorizedOnly')
  logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const user = req.user as IDecodedJWT;
    return this.authService.logoutUser(user, res);
  }

  // -------------------------------------------------------->
}
