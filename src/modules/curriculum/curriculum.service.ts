import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CurriculumService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(data: Prisma.CurriculumCreateInput) {
    try {
      return this.prisma.curriculum.create({ data });
    } catch (err) {
      throw err;
    }
  }

  async find() {
    try {
      const curriculum = {
        personal_data: await this.prisma.curriculum.findUnique({ where: { singleton: true } }),
        contact_field: await this.getContactField(),
        teaching_field: await this.getTeachingField(),
        academic_field: await this.getAcademicField(),
      };
      return curriculum
    } catch (err) {
      throw err;
    }
  }

  update(data: Prisma.CurriculumUpdateInput) {
    try {
      return this.prisma.curriculum.update({
        where: { singleton: true },
        data,
      });
    } catch (err) {
      throw err;
    }
  }

  remove(confirmation: string) {
    try {
      if (confirmation === 'confirma') {
        return this.prisma.curriculum.delete({ where: { singleton: true } });
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  private getContactField() {
    return this.prisma.contactInfo.findUnique({ where: { id: 1 } });
  }

  private getAcademicField() {
    return this.prisma.academicInfo.findUnique({ where: { id: 1 } });
  }

  private getTeachingField() {
    return this.prisma.teachingInfo.findUnique({ where: { id: 1 } });
  }
}
