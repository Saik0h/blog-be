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
import { CourseService } from './course.service';
import { Request } from 'express';
import { Prisma } from 'generated/prisma';
import { isPublic } from 'src/common/decorators/is-public.decorator';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  create(@Req() req: Request, @Body() body: Prisma.CourseCreateInput) {
    return this.courseService.createCourse(req, body);
  }

  @Get()
  @isPublic()
  findAll() {
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  @isPublic()
  findOne(@Param('id') id: string) {
    return this.courseService.getOneCourse(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Prisma.CourseUpdateInput) {
    return this.courseService.updateCourse(+id, body);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    return this.courseService.deleteCourse(req, +id);
  }
}
