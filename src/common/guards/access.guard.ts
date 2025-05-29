import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ACCESS_KEY } from '../decorators/access-level-decorator';
import { IDecodedJWT } from '../utils/decoded';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) { }

  canActivate(context: ExecutionContext): boolean {
    const accessLevel = this.reflector.getAllAndOverride<string>(ACCESS_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (accessLevel === 'public') return true

    const request = context.switchToHttp().getRequest();
    const token = request.cookies?.['accessToken'];

    let user: IDecodedJWT | null = null;
    if (token) {
      user = this.jwtService.verify(token) as IDecodedJWT;
      request.user = user;

    }
    switch (accessLevel) {

      case 'authorizedOnly':
        return !!user;

      case 'restrict':
        return !!user && user.role === 'CHEFE';

      default:
        return false;
    }
  }
}