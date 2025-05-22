import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Get,
  Res,
  Patch,
} from '@nestjs/common';
import { Prisma, User } from 'generated/prisma';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { JwtAuthGuard } from '../../common/guards/jwt.guard';
import { IDecodedJWT } from 'src/common/utils/decoded';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // -------------------> Rota de Registro de usuário
  @Post('register')
  register(
    @Body() registerPayload: Prisma.UserCreateInput,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.register(registerPayload, res);
  }

  // -------------------> Rota de login

  @Post('login')
  async login(
    @Body() loginDto: { username: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.login(loginDto, res);
  }

  // -------------------> Rota responsável por buscar usuário

  @Get('status')
  @UseGuards(JwtAuthGuard)
  async status(@Req() req: Request) {
    return this.authService.getUser(req);
  }

  // -------------------> Rota para verificar e e atualizar jwtToken

  @Post('refresh')
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.refreshTokens(req, res);
  }

  // -------------------> Rota de logout

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const user = req.user as IDecodedJWT;
    return this.authService.logoutUser(user, res);
  }

  // -------------------------------------------------------->
}
