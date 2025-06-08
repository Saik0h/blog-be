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
import { DecodedJWT } from 'src/common/utils/decoded';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { AuthenticatedAccess } from 'src/common/decorators/authenticated-access.decorator';
import { isPublic } from 'src/common/decorators/is-public.decorator';
import { use } from 'passport';

@Controller('auth')
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
  @isPublic()
  login(
    @Body() loginDto: { username: string; password: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.login(loginDto, res);
  }

  // -------------------> Rota responsável por buscar usuário

  @Get('user')
  @CurrentUser()
  user(@Req() req: Request) {
    return this.authService.getUser(req);
  }

  // -------------------> Rota responsável por buscar usuário

  @Get('status')
  @isPublic()
  status(@Req() req: Request) {
    return this.authService.isThereAUserLoggedIn(req);
  }

  // -------------------> Rota responsável por dizer se usuário é administrador

  @Get('isAdmin')
  @isPublic()
  isAdmin(@Req() req: Request) {
    return this.authService.isUserAnAdmin(req);
  }

  // -------------------> Rota para verificar e e atualizar jwtToken

  @Post('refresh')
  @isPublic()
  refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.authService.refreshTokens(req, res);
  }

  // -------------------> Rota de logout
  @Post('logout')
  @CurrentUser()
  logout(@Req() request: Request, @Res({ passthrough: true }) res: Response) {
    const user = request.user as DecodedJWT;
    return this.authService.logoutUser(user, res);
  }

  // -------------------------------------------------------->
}
