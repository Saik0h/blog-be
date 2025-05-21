import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IDecodedJWT } from 'src/common/utils/decoded';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();

    const token = request.cookies?.accessToken;
    if (!token) throw new UnauthorizedException('Access token not found');

    try {
      const decoded = this.jwtService.verify(token) as IDecodedJWT;

      const now = Date.now();
      if (!decoded.exp || now >= decoded.exp * 1000) {
        throw new ForbiddenException('Token expired');
      }

      request.user = { id: decoded.sub, role: decoded.role };
      return true;
    } catch (err) {
      throw new ForbiddenException('Invalid token');
    }
  }
}