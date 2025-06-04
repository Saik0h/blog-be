import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { AuthService } from 'src/modules/auth/auth.service';
import { getTokensFromCookies } from 'src/modules/auth/utils/cookie-service';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private readonly reflector: Reflector) { }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    let request: Request = context.switchToHttp().getRequest();
    const access = this.reflector.get<string>('access', context.getHandler())
    
    if (access === 'allow-public-access') return true


    if (access === 'authenticated-access' && getTokensFromCookies(request).access_token) {
      const isAuthenticated = await this.authService.verifyAccessToken(request)
      console.log('passou daqui')
      return !!isAuthenticated
    }

    if (!access) {
      const isAuthenticated = await this.authService.verifyAccessToken(request)
      if (!!isAuthenticated) {
        const user = await this.authService.extractPayload(getTokensFromCookies(request).access_token)
        if (user.role === 'CHEFE') return true
      }
    }


    return false

  }


}