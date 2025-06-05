import {
  BadRequestException,
  ConflictException,
  HttpException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { comparePassword, encodePassword } from 'src/common/utils/bcrypt';
import { Request, Response } from 'express';
import { Tokens } from 'src/common/utils/tokens';
import { IDecodedJWT } from 'src/common/utils/decoded';
import {
  clearTokensFromCookies,
  getTokensFromCookies,
  setTokensInCookies,
} from './utils/cookie-service';
// IMPORTS ACIMA-----------------------^

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: DatabaseService,
    private jwtService: JwtService,
  ) { }

  // ------------------>
  // Private constants
  // ------------------>
  private tokenExpiresIn = process.env.TOKEN_EXP
  private refreshTokenExpiresIn = process.env.REFRESH_TOKEN_EXP
  // <------------------

  // ------------------>
  // Private Methods
  // ------------------>
  private async generateTokens(userId: number, role: string): Promise<Tokens> {
    const payload: { sub: number; role: string } = {
      sub: userId,
      role,
    };

    const access_token = await this.signToken(payload);
    const refresh_token = await this.signToken(payload, this.refreshTokenExpiresIn);

    await this.updateRefreshTokenInDb(userId, refresh_token);
    return { access_token, refresh_token };
  }

  // ------------------>
  private async updateRefreshTokenInDb(userId: number, refresh_token: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: refresh_token },
    });
  }

  // ------------------>
  private async signToken(payload: { sub: number; role: string }, expIn = this.tokenExpiresIn) {
    return await this.jwtService.signAsync(payload, { secret: process.env.JWT_SECRET, expiresIn: expIn })
  }

  // ------------------>
  private async refreshExpiredAccessToken(req: Request, res: Response) {
    try {
      const refresh_token = getTokensFromCookies(req).refresh_token;
      if (refresh_token === null)
        throw new UnauthorizedException('User must be authenticated to access this resource');
      const decoded: IDecodedJWT = await this.extractPayload(refresh_token);

      const user = await this.prisma.user.findUnique({
        where: { id: decoded.sub },
      });

      if (!user) {
        throw new NotFoundException('User not found');
      }

      if (user.refreshToken !== refresh_token) {
        throw new UnauthorizedException('Invalid token');
      }

      const tokens: Tokens = await this.generateTokens(user.id, user.role);

      setTokensInCookies(res, tokens);

      return { message: 'Tokens Refreshed!' };
    } catch (err) {
      throw err instanceof HttpException
        ? err
        : new UnauthorizedException('Unable To Refresh Tokens');
    }
  }
  // <------------------

  // ------------------>
  // Public Methods
  // ------------------>
  public async extractPayload(token: string): Promise<IDecodedJWT> {
    const t = await this.jwtService.verifyAsync(token, { secret: process.env.JWT_SECRET }) as IDecodedJWT;
    return t
  }

  // ------------------>
  public async verifyAccessToken(req: Request) {
    const access_token = getTokensFromCookies(req).access_token;

    if (!access_token) {
      throw new UnauthorizedException('Authentication required');
    }

    let decoded: IDecodedJWT;

    try {
      decoded = await this.extractPayload(access_token) as IDecodedJWT;
    } catch (err) {
      throw new UnauthorizedException('Invalid Token');
    }

    return { message: 'Token is valid' };
  }
  // <------------------

  // ------------------>
  // Endpoint Methods
  // ------------------>
  async register(registerPayload: Prisma.UserCreateInput, res: Response) {
    try {
      const isUsernameTaken = await this.prisma.user.findUnique({
        where: { username: registerPayload.username },
      });
      if (isUsernameTaken) throw new ConflictException('Username taken');
      if (!registerPayload.firstname)
        throw new BadRequestException('First Name must be provided');
      if (!registerPayload.lastname)
        throw new BadRequestException('Last Name must be provided');
      if (!registerPayload.username)
        throw new BadRequestException('Username must be provided');
      if (!registerPayload.password)
        throw new BadRequestException('Password must be provided');

      const pass = encodePassword(registerPayload.password);
      const data = { ...registerPayload, password: pass };
      const user = await this.prisma.user.create({ data });
      const tokens = await this.generateTokens(user.id, user.role);

      setTokensInCookies(res, tokens);

      return { message: 'User registered successfully' };
    } catch (err) {
      throw err;
    }
  }

  // ------------------>
  async login(user: { username: string; password: string }, res: Response) {
    try {
      const findUser = await this.prisma.user.findUnique({
        where: { username: user.username },
      });
      if (!findUser) throw new NotFoundException("User Not Found");

      const pass = user.password;
      const isPasswordValid = comparePassword(pass, findUser.password);
      if (!isPasswordValid) throw new UnauthorizedException('Invalid Password');

      const tokens: Tokens = await this.generateTokens(
        findUser.id,
        findUser.role,
      );
      setTokensInCookies(res, tokens);

      return { message: 'Successfully logged in' };
    } catch (err) {
      throw err;
    }
  }

  // ------------------>
  async logoutUser(user: IDecodedJWT, res: Response) {
    try {
      if (!user) throw new NotFoundException('User is not logged in');
      const id = user.sub;
      clearTokensFromCookies(res);
      await this.prisma.user.update({
        where: { id },
        data: { refreshToken: null },
      });
      return { message: 'Successfully logged out' };
    } catch (err) {
      throw err;
    }
  }

  // ------------------>
  async refreshTokens(req: Request, res: Response) {
    try {
      return await this.verifyAccessToken(req);
    } catch (error) {
      try {
        return await this.refreshExpiredAccessToken(req, res);
      } catch (error) {
        throw error;
      }
    }
  }

  // ------------------>
  async getUser(request: Request) {
    const user = request['user'] as IDecodedJWT;

    try {
      if (!user) throw new UnauthorizedException('User not found');
      const u = await this.prisma.user.findUnique({
        where: { id: user.sub },
      });
      const { refreshToken, password, ...userLoggedIn } = u!;

      return userLoggedIn;
    } catch (err) {
      throw err;
    }
  }

  // ------------------>
  async isThereAUserLoggedIn(request: Request) {
    const user = request.user as IDecodedJWT;
    try {
      if (!user) return false
      return true;
    } catch (err) {
      throw err;
    }
  }
  // <------------------End
}
