import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly server: DatabaseService) {}

  async findAll() {
    return this.server.user.findMany({});
  }

  async findOne(id: number) {
    return this.server.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    if (!updateUserDto.password) {
      return this.server.user.update({ where: { id }, data: updateUserDto });
    } else {
      const newPassword = encodePassword(updateUserDto.password.toString());
      const data = { ...updateUserDto, password: newPassword };
      return this.server.user.update({ where: { id }, data });
    }
  }

  async remove(id: number) {
    return this.server.user.delete({ where: { id } });
  }
}
