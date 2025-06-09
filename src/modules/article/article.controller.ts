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
import { ArticleService } from './article.service';
import { Request } from 'express';
import { Prisma } from 'generated/prisma';
import { isPublic } from 'src/common/decorators/is-public.decorator';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Req() req: Request, @Body() body: Prisma.ArticleCreateInput) {
    return this.articleService.createArticle(req, body);
  }

  @Get()
  @isPublic()
  findAll() {
    return this.articleService.getAllArticles();
  }

  @Get(':id')
  @isPublic()
  findOne(@Param('id') id: string) {
    return this.articleService.getOneArticle(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Prisma.ArticleUpdateInput) {
    return this.articleService.updateArticle(+id, body);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    return this.articleService.deleteArticle(req, +id);
  }
}
