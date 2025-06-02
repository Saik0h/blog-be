import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ExperienceInfoService {
  constructor(private readonly prisma: DatabaseService) {}

  async createExperienceField(data: Prisma.ExperienceInfoCreateInput) {
    try {
      await this.prisma.experienceInfo.create({ data });
      return { message: 'Field created Successfully' };
    } catch (err) {
      throw err;
    }
  }

  async updateExperienceField(data: Prisma.ExperienceInfoUpdateInput) {
    if (!data) throw new BadRequestException('Body is missing');

    const ExperienceField = await this.prisma.experienceInfo.update({
      where: { singleton: true },
      data: { title: data.title, curriculum: { connect: { singleton: true } } },
    });
    if (!ExperienceField) throw new NotFoundException('Field doesnt exist yet');
    return { message: 'Field updated Successfully' };
  }

  async deleteField() {
    try {
      await this.prisma.experienceInfo.delete({
        where: { singleton: true },
      });
      return { message: 'Field deleted Successfully' };
    } catch (err) {
      throw err;
    }
  }

  async findField() {
    const field = await this.prisma.experienceInfo.findFirst({
      where: { singleton: true },
    });
    const items = await this.findAllExperienceInfoItems();
    return { title: field?.title, items };
  }

  async createExperienceFieldItem(data: Prisma.ExperienceInfoItemCreateInput) {
    try {
      await this.prisma.experienceInfoItem.create({
        data: {
          description: data.description,
          experienceInfo: { connect: { singleton: true } },
        },
      });
      return { message: 'Experience info updated successfuly' };
    } catch (err) {
      throw err;
    }
  }

  async updateExperienceFieldItem(
    id: number,
    data: Prisma.ExperienceInfoItemUpdateInput,
  ) {
    try {
      await this.prisma.experienceInfoItem.update({ where: { id }, data });
      return { message: 'Experience info updated successfuly' };
    } catch (err) {
      throw err;
    }
  }

  async deleteExperienceFieldItem(id: number) {
    try {
      await this.prisma.experienceInfoItem.delete({ where: { id } });
      return { message: 'Experience info updated successfuly' };
    } catch (err) {
      throw err;
    }
  }

  private async findAllExperienceInfoItems() {
    return await this.prisma.experienceInfoItem.findMany();
  }
}
