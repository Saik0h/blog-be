import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
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
import { ITokens } from 'src/common/utils/tokens';
import { IDecodedJWT } from 'src/common/utils/decoded';
import {
  clearTokensFromCookies,
  getTokensFromCookies,
  setTokensInCookies,
} from './utils/cookie-service';
// IMPORTS ACIMA-----------------------^

// const decoded_token = verify(token, process.env.SECRET_JWT, (error, decoded)=>{
//             if(error?.name === "TokenExpiredError"){
//                 throw new UnauthorizedException("Token expired.");
//             };
//             return { 
//                 user:decoded as User_Request,
//             };
//         });

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: DatabaseService,
    private jwtService: JwtService,
  ) { }

private tokenExpires = process.env.TOKEN_EXP
  // -------------------------------------------------------- //
  private extractPayload(token: string): IDecodedJWT {
    const t = this.jwtService.verify(token, { secret: 'abcde' }) as IDecodedJWT;
    return t
  }

  private async signToken(payload: { sub: number; role: string }, expIn = this.tokenExpires) {
    console.log(this.tokenExpires)
    return await this.jwtService.signAsync(payload, { secret: 'abcde', expiresIn: expIn })
  }

  // -------------------------------------------------------- //

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

  // -------------------------------------------------- //

  async login(user: { username: string; password: string }, res: Response) {
    try {
      const findUser = await this.prisma.user.findUnique({
        where: { username: user.username },
      });
      if (!findUser) throw new NotFoundException("User doesn't exist");

      const pass = user.password;
      const isPasswordValid = comparePassword(pass, findUser.password);
      if (!isPasswordValid) throw new ForbiddenException('Incorrect Password');

      const tokens: ITokens = await this.generateTokens(
        findUser.id,
        findUser.role,
      );
      setTokensInCookies(res, tokens);

      return { message: 'Successfully logged in' };
    } catch (err) {
      throw err;
    }
  }

  // -------------------------------------------------- //

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

  // -------------------------------------------------- //

  private async verifyAccessToken(req: Request, res: Response) {
    const accessToken = getTokensFromCookies(req).accessToken;

    if (!accessToken) {
      throw new ForbiddenException('Access token not found');
    }

    let decoded: IDecodedJWT;

    try {
      decoded = this.extractPayload(accessToken) as IDecodedJWT;
    } catch (err) {
      throw new ForbiddenException('Invalid access token');
    }

    return { message: 'Token is valid' };
  }

  // -------------------------------------------------- //

  private async refreshExpiredAccessToken(req: Request, res: Response) {
    try {
      const refreshToken = getTokensFromCookies(req).refreshToken;
      if (refreshToken === null)
        throw new ForbiddenException('User must be logged in');
      const decoded: IDecodedJWT = this.extractPayload(refreshToken);

      const user = await this.prisma.user.findUnique({
        where: { id: decoded.sub },
      });

      if (!user) {
        throw new NotFoundException('User not found');
      }

      if (user.refreshToken !== refreshToken) {
        throw new ForbiddenException('Invalid token');
      }

      const tokens: ITokens = await this.generateTokens(user.id, user.role);

      setTokensInCookies(res, tokens);

      return { message: 'Access token refreshed successfully' };
    } catch (err) {
      console.log(err)
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
    const user = req.user as IDecodedJWT;
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

  // -------------------------------------------------- //

  private async generateTokens(userId: number, role: string): Promise<ITokens> {
    const payload: { sub: number; role: string } = {
      sub: userId,
      role,
    };

    const accessToken = await this.signToken(payload);
    const refreshToken = await this.signToken(payload, '7d');

    await this.updateRefreshTokenInDb(userId, refreshToken);
    return { accessToken, refreshToken };
  }
  // -------------------------------------------------- //

  private async updateRefreshTokenInDb(userId: number, refreshToken: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken },
    });
  }
}
