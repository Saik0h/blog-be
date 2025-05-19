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
import { LocalGuard } from './guards/local.guard';
import { Request, Response } from 'express';
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
  async login(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const user = req.user as User;
    const tokens = await this.authService.generateTokens(
      user.id,
      user.username,
    );
    res.cookie('accessToken', tokens.accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 60000 * 3, // 3 minutos
    });
    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 60000 * 60 * 24 * 7, // 7 dias
    });

    return { message: 'Login realizado com sucesso' };
  }

  // Endpoint responsável por autenticar um access token. precisa de um access token como parâmetro e Retorna um usuário.
  @Get('status')
  @UseGuards(JwtAuthGuard)
  async status(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const user = req.user as User;
    const tokens: { accessToken: string; refreshToken: string } =
      await this.authService.generateTokens(user.id, user.username);

    res.cookie('accessToken', tokens.accessToken, {
      httpOnly: true,
      secure: false, // se localhost, tem que ser false
      sameSite: 'lax', // ou 'strict', mas 'lax' costuma funcionar melhor com cookies e CORS
      maxAge: 3 * 60 * 1000, // 3 minutos
    });

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    });
    return { message: 'Token validado com sucesso' };
  }

  // Endpoint responsável por autenticar um refreshtoken. Retorna um Access e Refresh Token.
  @Post('refresh')
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshToken: string = req.cookies['refreshToken'];
    const tokens: { accessToken: string; refreshToken: string } =
      await this.authService.refreshAccessToken(refreshToken);

    res.cookie('accessToken', tokens.accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 3, // 3 minutos
    });

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    });

    return { message: 'Token validado com sucesso' };
  }

  // Endpoint opcional para logout, invalida o refresh token no banco.
  @Post('logout')
  @UseGuards(JwtAuthGuard)
  logout(@Req() req: Request) {
    const user = req.user as User;
    return this.authService.logoutUser(user.id);
  }
}
