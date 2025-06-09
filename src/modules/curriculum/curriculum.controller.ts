import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CurriculumService } from './curriculum.service';

import { Prisma } from 'generated/prisma';
import { isPublic } from 'src/common/decorators/is-public.decorator';

@Controller('curriculum')
export class CurriculumController {
  constructor(private readonly curriculumService: CurriculumService) { }

  @Post()
  @isPublic()
  create(@Body() body: Prisma.CurriculumCreateInput) {
    return this.curriculumService.createCurriculum(body);
  }

  @Get()
  @isPublic()
  findCurriculum() {
    return this.curriculumService.findCurriculum();
  }

  @Post('contact')
  @isPublic()
  createContactInfo(@Body() body: Prisma.ContactInfoItemCreateInput) {
    return this.curriculumService.createContactItem(body);
  }

  @Patch('contact/:id')
  @isPublic()
  updateContactInfo(@Param('id') id: string, @Body() body: Prisma.ContactInfoItemUpdateInput) {
    return this.curriculumService.updateContactItem(+id, body);
  }

  @Delete('contact/:id')
  deleteContactInfo(@Param('id') id: string) {
    return this.curriculumService.deleteContactItem(+id);
  }

  @Post('field')
  @isPublic()
  createField(@Body() body: Prisma.FieldCreateInput) {
    return this.curriculumService.createField(body);
  }

  @Put('field/:id')
  @isPublic()
  updateField(@Param('id') id: string, @Body() body: Prisma.FieldUpdateInput) {
    return this.curriculumService.updateField(+id, body);
  }

  @Delete('field/:id')
  deleteField(@Param('id') id: string) {
    return this.curriculumService.deleteField(+id);
  }

  @Patch()
  update(@Body() data: Prisma.CurriculumUpdateInput) {
    return this.curriculumService.updatePersonalData(data);
  }

  @Delete('delete')
  remove() {
    return this.curriculumService.removeCurriculum();
  }
}
