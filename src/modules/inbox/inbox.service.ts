import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class InboxService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(data: Prisma.InboxMessageCreateInput) {
    try {
      await this.prisma.inboxMessage.create({ data });
      return { message: 'Message sent succesfully' };
    } catch (err) {
      throw err;
    }
  }

  async findAll() {
    try {
      return await this.prisma.inboxMessage.findMany();
    } catch (err) {
      throw err;
    }
  }

  async findOne(id: number) {
    try {
      if (!id) throw new BadRequestException('ID must be provided');
      const mail = await this.prisma.inboxMessage.findUnique({ where: { id } });
      if (!mail) throw new NotFoundException('Mail doesnt exist');
      return mail;
    } catch (err) {
      throw err;
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.inboxMessage.delete({ where: { id } });
      return { message: 'Mail deleted succesfully' };
    } catch (err) {
      throw err;
    }
  }

  async markAsRead(id: number) {
    await this.prisma.inboxMessage.update({
      where: { id },
      data: { read: true },
    });
    return {message: `Mail with the ID: ${id} was read`};
  }

  async search(query: string) {
    return await this.prisma.inboxMessage.findMany({
      where: {
        OR: [
          { message: { contains: query, mode: 'insensitive' } },
          { subject: { contains: query, mode: 'insensitive' } },
          { name: { contains: query, mode: 'insensitive' } },
        ],
      },
    });
  }
}
