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
import { BlogService } from './blog.service';
import { Request } from 'express';
import { Prisma } from 'generated/prisma';
import { isPublic } from 'src/common/decorators/is-public.decorator';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  create(@Req() req: Request, @Body() body: Prisma.BlogCreateInput) {
    return this.blogService.createBlog(req, body);
  }

  @Get()
  @isPublic()
  findAll() {
    return this.blogService.getAllBlogs();
  }

  @Get(':id')
  @isPublic()
  findOne(@Param('id') id: string) {
    return this.blogService.getOneBlog(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Prisma.BlogUpdateInput) {
    return this.blogService.updateBlog(+id, body);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    return this.blogService.deleteBlog(req, +id);
  }
}
