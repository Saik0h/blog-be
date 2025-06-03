import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CurriculumService } from './curriculum.service';

import { Prisma } from 'generated/prisma';
import { Access } from 'src/common/decorators/access-level-decorator';

@Controller('curriculum')
export class CurriculumController {
  constructor(private readonly curriculumService: CurriculumService) {}

  @Post()
  @Access('restrict')
  create(@Body() body: Prisma.CurriculumCreateInput) {
    return this.curriculumService.createCurriculum(body);
  }

  @Get()
  @Access('public')
  findAll() {
    return this.curriculumService.findCurriculum();
  }

  @Patch()
  @Access('restrict')
  update(@Body() data: Prisma.CurriculumUpdateInput) {
    return this.curriculumService.updatePersonalData(data);
  }

  @Delete('delete')
  @Access('restrict')
  remove() {
    return this.curriculumService.removeCurriculum();
  }
}
