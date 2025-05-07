import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly server: DatabaseService) {}

  async findAll() {
    const users = await this.server.user.findMany({});
    const usersWOPassword = users.map((user) => {
      const { password, ...userWOP } = user;
      return userWOP;
    });
    return usersWOPassword;
  }

  async findOne(id: number) {
    const user = await this.server.user.findUnique({ where: { id } });
    if (!user) {
      console.error('user not found');
    } else {
      const { password, ...userWOP } = user;
      return userWOP;
    }
  }

  async findAllByAuthor(id: number) {
    return this.server.post.findMany({ where: { authorId: id } });
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
