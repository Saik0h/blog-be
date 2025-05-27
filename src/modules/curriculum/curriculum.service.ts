import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';


@Injectable()
export class CurriculumService {
  constructor(private readonly prisma: DatabaseService) { }

  create(data: Prisma.CurriculumCreateInput) {
    try {
      return this.prisma.curriculum.create({ data })
    } catch (err) {
      throw err
    }
  }

  find() {
    try {
      return this.prisma.curriculum.findUnique({ where: { singleton: true } })
    } catch (err) {
      throw err
    }
  }

  update(data: Prisma.CurriculumUpdateInput) {
    try {
      return this.prisma.curriculum.update({ where: { singleton: true }, data })
    } catch (err) {
      throw err
    }
  }

  remove(confirmation: string) {
    try {
      if (confirmation === 'confirma') {
        return this.prisma.curriculum.delete({ where: { singleton: true } })

      }
    } catch (err) {
      throw err
    }
  }
}
