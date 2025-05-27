import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class InboxService {
  constructor(private readonly prisma: DatabaseService) { }

  create(data: Prisma.InboxMessageCreateInput) {
    try {
      return this.prisma.inboxMessage.create({ data });
    }
    catch (err) {
      throw err
    }
  }

  findAll() {
    try {
      return this.prisma.inboxMessage.findMany();
    }
    catch (err) {
      throw err
    }
  }

  findOne(id: number) {
    try {
      return this.prisma.inboxMessage.findUnique({ where: { id } });
    }
    catch (err) {
      throw err
    }
  }

  remove(id: number) {
    try {
      return this.prisma.inboxMessage.delete({ where: { id } });
    }
    catch (err) {
      throw err
    }
  }
}
