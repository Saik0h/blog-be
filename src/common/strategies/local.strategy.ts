import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../../modules/auth/auth.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';
import { Response } from 'express';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  validate(user: User, res: Response) {
    const us = {
      username: user.username,
      password: user.password
    } 
    const u = this.authService.login(us, res);
    return u;
  }
}
