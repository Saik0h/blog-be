import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { Prisma, User } from 'generated/prisma';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Endpoint responsável por registrar um usuário. Retorna um Access e Refresh Token.
  @Post('register')
  register(@Body() registerPayload: Prisma.UserCreateInput) {
    return this.authService.register(registerPayload);
  }

  // Endpoint responsável pelo login de um usuário. Retorna um Access e Refresh Token.
  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    return req.user;
  }

  // Endpoint responsável por autenticar um access token. precisa de um access token como parâmetro e Retorna um usuário.
  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    return req.user;
  }

  // Endpoint responsável por autenticar um refreshtoken. Retorna um Access e Refresh Token.
  @Post('refresh-token')
  async refresh(@Body() body: { refreshToken: string }) {
    return this.authService.refreshAccessToken(body.refreshToken);
  }

  // Endpoint opcional para logout, invalida o refresh token no banco.
  @Post('logout')
  @UseGuards(JwtAuthGuard)
  logout(@Req() req: Request) {
    const user = req.user as User;
    return this.authService.logoutUser(user.id);
  }
}
