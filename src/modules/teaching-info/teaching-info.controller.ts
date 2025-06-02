import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { TeachingInfoService } from './teaching-info.service';

@Controller('api/curriculum/teaching')
export class TeachingInfoController {
  constructor(private readonly teachingInfoService: TeachingInfoService) {}
  @Post()
  create(@Body() createTeachingInfoDto: Prisma.TeachingInfoCreateInput) {
    return this.teachingInfoService.createTeachingField(createTeachingInfoDto);
  }

  @Get()
  findField() {
    return this.teachingInfoService.findField();
  }

  @Patch()
  updateField(@Body() body: Prisma.TeachingInfoUpdateInput) {
    return this.teachingInfoService.updateTeachingField(body);
  }

  @Delete()
  removeField() {
    return this.teachingInfoService.deleteField();
  }

  @Post('item')
  createChild(@Body() body: Prisma.TeachingInfoItemCreateInput) {
    return this.teachingInfoService.createTeachingFieldItem(body);
  }

  @Patch(':id')
  updateChild(
    @Param('id') id: string,
    @Body() body: Prisma.TeachingInfoItemUpdateInput,
  ) {
    return this.teachingInfoService.updateTeachingFieldItem(+id, body);
  }

  @Delete(':id')
  removeChild(@Param('id') id: string) {
    return this.teachingInfoService.deleteTeachingFieldItem(+id);
  }
}
