import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurriculumService } from './curriculum.service';

import { Prisma } from 'generated/prisma';
import { Access } from 'src/common/decorators/access-level-decorator';

@Controller('api/curriculum')
export class CurriculumController {
  constructor(private readonly curriculumService: CurriculumService) { }

  @Post()
  @Access('restrict')
  create(@Body() createCurriculumDto: Prisma.CurriculumCreateInput) {
    return this.curriculumService.create(createCurriculumDto);
  }

  @Get()
  @Access('public')
  findAll() {
    return this.curriculumService.find();
  }

  @Patch()
  @Access('restrict')
  update(@Body() updateCurriculumDto: Prisma.CurriculumUpdateInput) {
    return this.curriculumService.update(updateCurriculumDto);
  }

  @Delete()
  @Access('restrict')
  remove(confirmation: string) {
    return this.curriculumService.remove(confirmation);
  }
}
