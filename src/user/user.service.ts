import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly server: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.server.user.create({ data: createUserDto });
  }

  async findAll() {
    return this.server.user.findMany({});
  }

  async findOne(id: number) {
    return this.server.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    return this.server.user.update({ where: { id }, data: updateUserDto });
  }

  async remove(id: number) {
    return this.server.user.delete({ where: { id } });
  }
}
