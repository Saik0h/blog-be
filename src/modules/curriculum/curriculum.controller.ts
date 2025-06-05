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
import { isPublic } from 'src/common/decorators/is-public.decorator';

@Controller('curriculum')
export class CurriculumController {
  constructor(private readonly curriculumService: CurriculumService) {}

  @Post()
  create(@Body() body: Prisma.CurriculumCreateInput) {
    return this.curriculumService.createCurriculum(body);
  }
  
  @Get()
  @isPublic()
  findAll() {
    return this.curriculumService.findCurriculum();
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
