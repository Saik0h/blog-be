import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';

const cookieExtractor = (req: Request): string | null => {
  if (req && req.cookies) {
    return req.cookies['accessToken'];
  }
  return null;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {


constructor() {
    super({
      jwtFromRequest: cookieExtractor,
      ignoreExpiration: false,
      secretOrKey: 'abcde',
    });
  }

  validate(payload: any) {
    return payload;
  }
}
