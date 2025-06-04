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
import { AllowPublicAccess } from 'src/common/decorators/allow-public-access.decorator';
import { RestrictAccess } from 'src/common/decorators/restrict-access.decorator';
import { AuthenticatedAccess } from 'src/common/decorators/authenticated-access.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // -------------------> Rota de Registro de usuário
  @Post('register')
  register(
    @Body() registerPayload: Prisma.UserCreateInput,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.register(registerPayload, res);
  }

  // -------------------> Rota de login
  @AllowPublicAccess()
  @Post('login')
  login(
    @Body() loginDto: { username: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.login(loginDto, res);
  }

  // -------------------> Rota responsável por buscar usuário

  @AuthenticatedAccess()
  @Get('user')
  user(@Req() req: Request) {
    return this.authService.getUser(req);
  }

  // -------------------> Rota responsável por buscar usuário

  @Get('status')
  status(@Req() req: Request) {
    return this.authService.isThereAUserLoggedIn(req);
  }

  // -------------------> Rota para verificar e e atualizar jwtToken

  @Post('refresh')
  @AllowPublicAccess()
  refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.refreshTokens(req, res);
  }

  // -------------------> Rota de logout
  @Post('logout')
  logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const user = req.user as IDecodedJWT;
    return this.authService.logoutUser(user, res);
  }

  // -------------------------------------------------------->
}
