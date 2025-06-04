import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExperienceInfoService } from './experience-info.service';
import { Prisma } from 'generated/prisma';

@Controller('curriculum/experience')
export class ExperienceInfoController {
  constructor(private readonly experienceInfoService: ExperienceInfoService) {}

  @Post()
  create(@Body() createExperienceInfoDto: Prisma.ExperienceInfoCreateInput) {
    return this.experienceInfoService.createExperienceField(
      createExperienceInfoDto,
    );
  }

  @Get()
  findField() {
    return this.experienceInfoService.findField();
  }

  @Patch()
  updateField(@Body() body: Prisma.ExperienceInfoUpdateInput) {
    return this.experienceInfoService.updateExperienceField(body);
  }

  @Delete()
  removeField() {
    return this.experienceInfoService.deleteField();
  }

  @Post('item')
  createChild(@Body() body: Prisma.ExperienceInfoItemCreateInput) {
    return this.experienceInfoService.createExperienceFieldItem(body);
  }

  @Patch(':id')
  updateChild(
    @Param('id') id: string,
    @Body() body: Prisma.ExperienceInfoItemUpdateInput,
  ) {
    return this.experienceInfoService.updateExperienceFieldItem(+id, body);
  }

  @Delete(':id')
  removeChild(@Param('id') id: string) {
    return this.experienceInfoService.deleteExperienceFieldItem(+id);
  }
}
