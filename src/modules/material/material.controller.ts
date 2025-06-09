import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { MaterialService } from './material.service';
import { Request } from 'express';
import { Prisma } from 'generated/prisma';
import { isPublic } from 'src/common/decorators/is-public.decorator';

@Controller('materials')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Post()
  create(@Req() req: Request, @Body() body: Prisma.MaterialCreateInput) {
    return this.materialService.createMaterial(req, body);
  }

  @Get()
  @isPublic()
  findAll() {
    return this.materialService.getAllMaterials();
  }

  @Get(':id')
  @isPublic()
  findOne(@Param('id') id: string) {
    return this.materialService.getOneMaterial(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Prisma.MaterialUpdateInput) {
    return this.materialService.updateMaterial(+id, body);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    return this.materialService.deleteMaterial(req, +id);
  }
}
