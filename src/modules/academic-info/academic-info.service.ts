import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class AcademicInfoService {
  constructor(private readonly prisma: DatabaseService) {}

  async createAcademicField(data: Prisma.AcademicInfoCreateInput) {
    try {
      await this.prisma.academicInfo.create({ data });
      return { message: 'Field created Successfully' };
    } catch (err) {
      throw err;
    }
  }

  async updateAcademicField(data: Prisma.AcademicInfoUpdateInput) {
    if (!data) throw new BadRequestException('Body is missing');

    const academicField = await this.prisma.academicInfo.update({
      where: { singleton: true },
      data,
    });
    if (!academicField) throw new NotFoundException('Field doesnt exist yet');
    return { message: 'Field updated Successfully' };
  }

  async deleteField() {
    try {
      await this.prisma.academicInfo.delete({
        where: { singleton: true },
      });
      return { message: 'Field deleted Successfully' };
    } catch (err) {
      throw err;
    }
  }

  async findField() {
    const field = await this.prisma.academicInfo.findFirst({
      where: { singleton: true },
    });
    const items = await this.findAllAcademicInfoItems();
    return { title: field?.title, items };
  }

  async createAcademicFieldItem(data: Prisma.AcademicInfoItemCreateInput) {
    try {
      await this.prisma.academicInfoItem.create({
        data: {
          description: data.description,
          academicInfo: { connect: { singleton: true } },
        },
      });
      return { message: 'Academic info updated successfuly' };
    } catch (err) {
      throw err;
    }
  }

  async updateAcademicFieldItem(
    id: number,
    data: Prisma.AcademicInfoItemUpdateInput,
  ) {
    try {
      await this.prisma.academicInfoItem.update({ where: { id }, data });
      return { message: 'Academic info updated successfuly' };
    } catch (err) {
      throw err;
    }
  }

  async deleteAcademicFieldItem(id: number) {
    try {
      await this.prisma.academicInfoItem.delete({ where: { id } });
      return { message: 'Academic info updated successfuly' };
    } catch (err) {
      throw err;
    }
  }

  private async findAllAcademicInfoItems() {
    return await this.prisma.academicInfoItem.findMany();
  }
}
