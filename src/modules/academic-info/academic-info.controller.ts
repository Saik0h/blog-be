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

@Access('public')
@Controller('api/curriculum/academic')
export class AcademicInfoController {
  constructor(private readonly academicInfoService: AcademicInfoService) {}

  @Post()
  create(@Body() createAcademicInfoDto: Prisma.AcademicInfoCreateInput) {
    return this.academicInfoService.createAcademicField(createAcademicInfoDto);
  }

  @Get()
  findField() {
    return this.academicInfoService.findField();
  }

  @Patch()
  updateField(@Body() body: Prisma.AcademicInfoUpdateInput) {
    return this.academicInfoService.updateAcademicField(body);
  }

  @Delete()
  removeField() {
    return this.academicInfoService.deleteField();
  }

  @Post('item')
  createChild(@Body() body: Prisma.AcademicInfoItemCreateInput) {
    return this.academicInfoService.createAcademicFieldItem(body);
  }

  @Patch(':id')
  updateChild(
    @Param('id') id: string,
    @Body() body: Prisma.AcademicInfoItemUpdateInput,
  ) {
    return this.academicInfoService.updateAcademicFieldItem(+id, body);
  }

  @Delete(':id')
  removeChild(@Param('id') id: string) {
    return this.academicInfoService.deleteAcademicFieldItem(+id);
  }
}
