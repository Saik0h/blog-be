import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FaqService {
  constructor(private readonly prisma: DatabaseService) { }

  async create(data: Prisma.FAQCreateInput) {
    try {
      return await this.prisma.fAQ.create({ data });
    } catch (error) {
      throw error
    }
  }

  async findAll() {
    try {
      return await this.prisma.fAQ.findMany();
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.fAQ.findUnique({ where: { id } });
    } catch (error) {
      throw error
    }
  }

  async update(id: number, data: Prisma.FAQUpdateInput) {
    try {

      return await this.prisma.fAQ.update({ where: { id }, data });
    } catch (error) {
      throw error
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.fAQ.delete({ where: { id } });
    } catch (error) {
      throw error
    }
  }
}
