import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { AuthService } from 'src/modules/auth/auth.service';
import { getTokensFromCookies } from 'src/modules/auth/utils/cookie-service';
import { DecodedJWT } from '../utils/decoded';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private readonly reflector: Reflector) { }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    let request: Request = context.switchToHttp().getRequest();
    const current_user = this.reflector.get<string>('isTheTargetUserTheCurrentUser', context.getHandler())
    const is_route_public = this.reflector.get<string>('isThisRoutePublic', context.getHandler())
    const is_authenticated = this.reflector.get<string>('isAuthenticated', context.getHandler())

    if (is_route_public === 'true') {
      const identifier = getTokensFromCookies(request).refresh_token
      const authorization = getTokensFromCookies(request).access_token
      
      if (!!authorization) {
        await this.authService.verifyAccessToken(request)
        const user = await this.authService.extractPayload(authorization);
        request['user'] = user as DecodedJWT
      }
        if (!authorization && !!identifier) {
        const user = await this.authService.extractPayload(identifier);
        request['user'] = user as DecodedJWT
      }


      return true
    }

    if (is_authenticated === 'true' && getTokensFromCookies(request).access_token) {
      const isAuthenticated = await this.authService.verifyAccessToken(request)
      return !!isAuthenticated
    }

    const isAuthenticated = await this.authService.verifyAccessToken(request)
    const user = await this.authService.extractPayload(getTokensFromCookies(request).access_token);
    request['user'] = user as DecodedJWT

    if (current_user === 'true') {
      return !!user
    }

    if (!!isAuthenticated) {
      if (user.role === 'CHEFE') return true
    }

    return false
  }
}