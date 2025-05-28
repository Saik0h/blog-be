import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurriculumService } from './curriculum.service';

import { Prisma } from 'generated/prisma';
import { Access } from 'src/common/decorators/access-level-decorator';

@Controller('api/curriculum')
export class CurriculumController {
  constructor(private readonly curriculumService: CurriculumService) { }

  @Post()
  @Access('restrict')
  create(@Body() body: Prisma.CurriculumCreateInput) {
    return this.curriculumService.create(body);
  }

  @Get()
  @Access('public')
  findAll() {
    return this.curriculumService.find();
  }

  @Patch()
  @Access('restrict')
  update(@Body() data: Prisma.CurriculumUpdateInput) {
    return this.curriculumService.update(data);
  }

  @Delete(':confirm')
  @Access('restrict')
  remove(@Param('confirm') confirmation: string) {
    return this.curriculumService.remove(confirmation);
  }
}
