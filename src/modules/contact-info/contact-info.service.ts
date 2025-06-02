import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ContactInfoService {
  constructor(private readonly prisma: DatabaseService) {}

  async createContactField(data: Prisma.ContactInfoCreateInput) {
    try {
      await this.prisma.contactInfo.create({ data });
      return { message: 'Field created Successfully' };
    } catch (err) {
      throw err;
    }
  }

  async updateContactField(data: Prisma.ContactInfoUpdateInput) {
    if (!data) throw new BadRequestException('Body is missing');

    const ContactField = await this.prisma.contactInfo.update({
      where: { singleton: true },
      data,
    });
    if (!ContactField) throw new NotFoundException('Field doesnt exist yet');
    return { message: 'Field updated Successfully' };
  }

  async deleteField() {
    try {
      await this.prisma.contactInfo.delete({
        where: { singleton: true },
      });
      return { message: 'Field deleted Successfully' };
    } catch (err) {
      throw err;
    }
  }

  async findField() {
    const field = await this.prisma.contactInfo.findFirst({
      where: { singleton: true },
    });
    const items = await this.findAllContactInfoItems();
    return { title: field?.title, items };
  }

  async createContactFieldItem(data: Prisma.ContactInfoItemCreateInput) {
    try {
      await this.prisma.contactInfoItem.create({
        data: {
          label: data.label,
          link: data.link,
          platform: data.platform,
          contactInfo: { connect: { singleton: true } },
        },
      });
      return { message: 'Contact info updated successfuly' };
    } catch (err) {
      throw err;
    }
  }

  async updateContactFieldItem(
    id: number,
    data: Prisma.ContactInfoItemUpdateInput,
  ) {
    try {
      await this.prisma.contactInfoItem.update({ where: { id }, data });
      return { message: 'Contact info updated successfuly' };
    } catch (err) {
      throw err;
    }
  }

  async deleteContactFieldItem(id: number) {
    try {
      await this.prisma.contactInfoItem.delete({ where: { id } });
      return { message: 'Contact info updated successfuly' };
    } catch (err) {
      throw err;
    }
  }

  private async findAllContactInfoItems() {
    return await this.prisma.contactInfoItem.findMany();
  }
}
