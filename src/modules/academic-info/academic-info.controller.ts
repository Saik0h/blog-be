import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AcademicInfoService } from './academic-info.service';
import { Prisma } from 'generated/prisma';
import { Access } from 'src/common/decorators/access-level-decorator';

@Controller('api/curriculum/academic')
export class AcademicInfoController {
  constructor(private readonly academicInfoService: AcademicInfoService) {}

  @Post()
  @Access('public')
  create(@Body() createAcademicInfoDto: Prisma.AcademicInfoCreateInput) {
    return this.academicInfoService.createAcademicField(createAcademicInfoDto);
  }

  @Get()
  @Access('public')
  findField() {
    return this.academicInfoService.findField();
  }

  @Patch()
  @Access('public')
  updateField(@Body() body: Prisma.AcademicInfoUpdateInput) {
    return this.academicInfoService.updateAcademicField(body);
  }

  @Delete()
  @Access('public')
  removeField() {
    return this.academicInfoService.deleteField();
  }

  @Post('item')
  @Access('public')
  createChild(@Body() body: Prisma.AcademicInfoItemCreateInput) {
    return this.academicInfoService.createAcademicFieldItem(body);
  }

  @Patch(':id')
  @Access('public')
  updateChild(
    @Param('id') id: string,
    @Body() body: Prisma.AcademicInfoItemUpdateInput,
  ) {
    return this.academicInfoService.updateAcademicFieldItem(+id, body);
  }

  @Delete(':id')
  @Access('public')
  removeChild(@Param('id') id: string) {
    return this.academicInfoService.deleteAcademicFieldItem(+id);
  }
}
