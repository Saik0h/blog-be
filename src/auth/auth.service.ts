import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { error } from 'console';
import { comparePassword, encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly server: DatabaseService,
    private jwtService: JwtService,
  ) {}

  async register(registerPayload: Prisma.UserCreateInput) {
    const pass = encodePassword(registerPayload.password);
    const data = { ...registerPayload, password: pass };
    const user = await this.server.user.create({ data }); 
    const token = this.jwtService.sign(user)
    return token
  }

  async validateUser(username: string, pass: string) {
    const userfound = await this.server.user.findUnique({
      where: { username },
    });
    if (!userfound) throw new NotFoundException();
    if (comparePassword(pass, userfound.password)) {
      const { password, ...user } = userfound;
      return this.jwtService.sign(user);
    }
    throw new error('Incorrect Password', 402);
  }
}
