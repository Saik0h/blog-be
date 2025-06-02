import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TeachingInfoService {
  constructor(private readonly prisma: DatabaseService) {}

  async createTeachingField(data: Prisma.TeachingInfoCreateInput) {
    try {
      await this.prisma.teachingInfo.create({ data });
      return { message: 'Field created Successfully' };
    } catch (err) {
      throw err;
    }
  }

  async updateTeachingField(data: Prisma.TeachingInfoUpdateInput) {
    if (!data) throw new BadRequestException('Body is missing');

    const TeachingField = await this.prisma.teachingInfo.update({
      where: { singleton: true },
      data,
    });
    if (!TeachingField) throw new NotFoundException('Field doesnt exist yet');
    return { message: 'Field updated Successfully' };
  }

  async deleteField() {
    try {
      await this.prisma.teachingInfo.delete({
        where: { singleton: true },
      });
      return { message: 'Field deleted Successfully' };
    } catch (err) {
      throw err;
    }
  }

  async findField() {
    const field = await this.prisma.teachingInfo.findFirst({
      where: { singleton: true },
    });
    const items = await this.findAllTeachingInfoItems();
    return { title: field?.title, items };
  }

  async createTeachingFieldItem(data: Prisma.TeachingInfoItemCreateInput) {
    try {
      await this.prisma.teachingInfoItem.create({
        data: {
          description: data.description,
          teachingInfo: { connect: { singleton: true } },
        },
      });
      return { message: 'Teaching info updated successfuly' };
    } catch (err) {
      throw err;
    }
  }

  async updateTeachingFieldItem(
    id: number,
    data: Prisma.TeachingInfoItemUpdateInput,
  ) {
    try {
      await this.prisma.teachingInfoItem.update({ where: { id }, data });
      return { message: 'Teaching info updated successfuly' };
    } catch (err) {
      throw err;
    }
  }

  async deleteTeachingFieldItem(id: number) {
    try {
      await this.prisma.teachingInfoItem.delete({ where: { id } });
      return { message: 'Teaching info updated successfuly' };
    } catch (err) {
      throw err;
    }
  }

  private async findAllTeachingInfoItems() {
    return await this.prisma.teachingInfoItem.findMany();
  }
}
