import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CurriculumService {
  constructor(private readonly prisma: DatabaseService) {}

  async createCurriculum(data: Prisma.CurriculumCreateInput) {
    try {
      return await this.prisma.curriculum.create({ data });
    } catch (err) {
      throw err;
    }
  }

  async findCurriculum() {
    try {
      return await this.prisma.curriculum.findUnique({
        where: { singleton: true },
        include: {
          fields: { select: { title: true, items: true, id: true } },
          contactInfo: {
            select: { id: true, link: true, label: true, platform: true },
          },
        },
      });
    } catch (err) {
      throw err;
    }
  }

  async updatePersonalData(data: Prisma.CurriculumUpdateInput) {
    try {
      return await this.prisma.curriculum.update({
        where: { singleton: true },
        data,
      });
    } catch (err) {
      throw err;
    }
  }

  async removeCurriculum() {
    try {
      return await this.prisma.curriculum.delete({
        where: { singleton: true },
      });
    } catch (err) {
      throw err;
    }
  }

  async createContactItem(data: Prisma.ContactInfoItemCreateInput) {
    try {
      await this.prisma.contactInfoItem.create({
        data: {
          ...data,
          contactInfo: { connect: { singleton: true } },
        },
      });
      return { message: 'Nova Informação de contato adicionada' };
    } catch (err) {
      throw err;
    }
  }

  async updateContactItem(id: number, data: Prisma.ContactInfoItemUpdateInput) {
    try {
      await this.prisma.contactInfoItem.update({ where: { id }, data });
      return { message: 'Informação atualizada.' };
    } catch (err) {
      throw err;
    }
  }

  async deleteContactItem(id: number) {
    try {
      await this.prisma.contactInfoItem.delete({ where: { id } });
      return { message: 'Informação removida.' };
    } catch (err) {
      throw err;
    }
  }

  async createField(dataWithId: Prisma.FieldCreateInputWithPossibleId) {
    const { id, ...data } = dataWithId;
    try {
      if (!data) throw new BadRequestException();
      await this.prisma.field.create({
        data: {
          ...data,
          curriculum: { connect: { singleton: true } },
        },
      });
      return { message: 'Novo campo adicionado' };
    } catch (err) {
      throw err;
    }
  }

  async updateField(id: number, data: Prisma.FieldUpdateInput) {
    try {
      await this.prisma.field.update({ where: { id }, data });
      return { message: 'Campo atualizado' };
    } catch (err) {
      throw err;
    }
  }

  async deleteField(id: number) {
    try {
      await this.prisma.field.delete({ where: { id } });
      return { message: 'Novo campo adicionado' };
    } catch (err) {
      throw err;
    }
  }
}
