import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Get,
  Res,
} from '@nestjs/common';
import { Prisma, User } from 'generated/prisma';
import { AuthService } from './auth.service';
import { LocalGuard } from '../../common/guards/local.guard';
import { Request, Response } from 'express';
import { JwtAuthGuard } from '../../common/guards/jwt.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Endpoint responsável por registrar um usuário. Retorna um Access e Refresh Token.
  @Post('register')
  register(
    @Body() registerPayload: Prisma.UserCreateInput,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.register(registerPayload, res);
  }

  // Endpoint responsável pelo login de um usuário. Retorna um Access e Refresh Token.
  @Post('login')
  @UseGuards(LocalGuard)
  async login(
    @Body() loginDto: { username: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.login(loginDto, res);
  }

  // Endpoint responsável por autenticar um access token. precisa de um access token como parâmetro e Retorna um usuário.
  @Get('status')
  @UseGuards(JwtAuthGuard)
  async status(@Req() req: Request) {
    return this.authService.getUser(req);
  }

  // Endpoint responsável por autenticar um refreshtoken. Retorna um Access e Refresh Token.
  @Post('refresh')
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.refreshTokens(req, res);
  }

  // Endpoint opcional para logout, invalida o refresh token no banco.
  @Post('logout')
  @UseGuards(JwtAuthGuard)
  logout(@Req() req: Request, res: Response) {
    const user = req.user as User;
    return this.authService.logoutUser(user, res);
  }
}
