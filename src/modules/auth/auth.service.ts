import {
  ConflictException,
  ForbiddenException,
  HttpException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma, User } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { comparePassword, encodePassword } from 'src/common/utils/bcrypt';
import { Request, Response } from 'express';
import { ITokens } from 'src/common/utils/tokens';
import { IDecodedJWT } from 'src/common/utils/decoded';
import { use } from 'passport';
// IMPORTS ACIMA-----------------------^

// Service responsável pelas operações de autenticação(registro e login com token)
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: DatabaseService,
    private jwtService: JwtService,
  ) {}

  private getTokensFromCookies(req: Request): {
    accessToken: string | null;
    refreshToken: string | null;
  } {
    const refreshToken: string = req.cookies['refreshToken'];
    const accessToken: string = req.cookies['accessToken'];
    return {
      accessToken,
      refreshToken,
    };
  }

  private isTokenExpired(decoded: IDecodedJWT): boolean {
    if (!decoded.exp) return true;

    const expirationTime = decoded.exp * 1000;
    const currentTime = Date.now();

    return currentTime >= expirationTime;
  }

  private extractPayload(token: string): IDecodedJWT {
    return this.jwtService.verify(token) as IDecodedJWT;
  }

  private setTokensInCookies(res: Response, tokens: ITokens) {
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
  }

  private clearTokensFromCookies(res: Response) {
    res.clearCookie('accessToken', {
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    });

    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    });
  }

  // -------------------------------------------------- //
  // ----- Registra um usuário e retorna os tokens ---- //
  // -------------------------------------------------- //
  async register(registerPayload: Prisma.UserCreateInput, res: Response) {
    // Verifica se o nome de usuário já está sendo utilizado
    const isUsernameTaken = await this.prisma.user.findUnique({
      where: { username: registerPayload.username },
    });
    // se sim, lança um erro de conflito
    if (isUsernameTaken) throw new ConflictException('Username taken');
    // codifica senha
    const pass = encodePassword(registerPayload.password);
    // troca a senha enviada pelo input pela senha codificada
    const data = { ...registerPayload, password: pass };
    // Cria o usuário
    const user = await this.prisma.user.create({ data });

    // gera os tokens
    const tokens = await this.generateTokens(user.id, user.username);

    this.setTokensInCookies(res, tokens);

    // retorna os tokens
    return { message: 'User registered successfully' };
  }
  // -------------------------------------------------- //

  // -------------------------------------------------- //
  // ---------- Gera os tokens ao fazer login --------- //
  // -------------------------------------------------- //
  async login(user: {username: string, password: string}, res: Response) {
    // Busca usuário pelo nome de usuário]
    const findUser = await this.prisma.user.findUnique({
      where: { username:user.username },
    });
    const pass = user.password;
console.log(pass)
    // se não encontra usuário, lança exceção "Usuário não existe"
    if (!findUser) throw new NotFoundException("User doesn't exist");

    // Confere se a senha é uma senha válida
    const isPasswordValid = comparePassword(pass, findUser.password);
    // se a senha não é válida, lança uma exceção "Senha incorreta"
    if (!isPasswordValid) throw new ForbiddenException('Incorrect Password');

    // gera os tokens
    const tokens: ITokens = await this.generateTokens(
      findUser.id,
      findUser.username,
    );
    // envia os tokens via cookies
    this.setTokensInCookies(res, tokens);

    // retorna mensagem de sucesso
    return { message: 'Successfully logged in' };
  }
  // -------------------------------------------------- //

  // -------------------------------------------------- //
  // ---- Limpa o Refresh token do usuário(Logout) ---- //
  // -------------------------------------------------- //
  async logoutUser(user: User, res: Response) {
    const id = user.id;
    this.clearTokensFromCookies(res);
    await this.prisma.user.update({
      where: { id },
      data: { refreshToken: null },
    });

    return { message: 'Successfully logged out' };
  }
  // -------------------------------------------------- //

  private async verifyAccessToken(req: Request, res: Response) {
    const accessToken = this.getTokensFromCookies(req).accessToken;

    if (!accessToken) {
      throw new ForbiddenException('Access token not found');
    }

    let decoded: IDecodedJWT;

    try {
      decoded = this.extractPayload(accessToken) as IDecodedJWT;
    } catch (err) {
      throw new ForbiddenException('Invalid access token');
    }

    if (this.isTokenExpired(decoded)) {
      throw new ForbiddenException('Access token expired');
    }
    return { message: 'Token refreshed succesfully' };
  }

  // -------------------------------------------------- //
  // ------- Atualiza o Access token do usuário ------ //
  // -------------------------------------------------- //

  private async refreshExpiredAccessToken(req: Request, res: Response) {
    try {
      const refreshToken = this.getTokensFromCookies(req).refreshToken;
      if (refreshToken === null)
        throw new ForbiddenException('User must be logged in');
      // Verifica e decodifica o refresh token
      const decoded: IDecodedJWT = this.extractPayload(refreshToken);

      if (this.isTokenExpired(decoded))
        throw new ForbiddenException('Token Expired');

      // Busca o usuário no banco de dados com base no id encontrado no refresh token passado na requisição
      const user = await this.prisma.user.findUnique({
        where: { id: decoded.sub },
      });

      // Verifica se o usuário existe e se o refresh token corresponde ao armazenado no banco
      if (!user) {
        throw new NotFoundException('User not found');
      }

      // Verifica se o refresh token armazenado no banco de dados corresponde ao refresh token passado na requisição
      if (user.refreshToken !== refreshToken) {
        throw new ForbiddenException('Invalid token');
      }

      // Gera novos tokens (access e refresh token)
      const tokens: ITokens = await this.generateTokens(user.id, user.username);

      this.setTokensInCookies(res, tokens);

      return { message: 'Access token refreshed successfully' };
    } catch (err) {
      console.error('Refresh token error:', err);
      throw err instanceof HttpException
        ? err
        : new ForbiddenException('Unable to refresh token');
    }
  }
  // -------------------------------------------------- //

  async refreshTokens(req: Request, res: Response) {
    try {
      return await this.verifyAccessToken(req, res);
    } catch (error) {
      try {
        return await this.refreshExpiredAccessToken(req, res);
      } catch (error) {
        throw error;
      }
    }
  }

  async getUser(req: Request) {
    const user = req.user as User;
    try {
      if (!user) throw new UnauthorizedException('User not found');
      const u = await this.prisma.user.findUnique({
        where: { id: user.id },
      });
      const { refreshToken, password, ...userLoggedIn } = u!;

      return userLoggedIn;
    } catch (err) {
      throw err;
    }
  }
  // -------------------------------------------------- //
  // ---- Gera novos tokens (access/refresh token) ---- //
  // -------------------------------------------------- //
  private async generateTokens(userId: number, role: string): Promise<ITokens> {
    const payload: { sub: number; role: string } = {
      sub: userId,
      role,
    };

    // Gera  o access token (expira em 3 minutos)
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '3m',
    });

    // Gera o refresh token (expira em 7 dias)
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d', // Tempo de expiração: 7 dias
    });
    await this.updateRefreshTokenInDb(userId, refreshToken);
    // retorna ambos os tokens
    return { accessToken, refreshToken };
  }
  // -------------------------------------------------- //

  // -------------------------------------------------- //
  // -- Atualiza o refresh token armazenado no banco -- //
  // -------------------------------------------------- //
  private async updateRefreshTokenInDb(userId: number, refreshToken: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken },
    });
  }
}
