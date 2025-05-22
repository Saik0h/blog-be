import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/common/guards/jwt.guard';

@Controller('api/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // -------------------> Mecanismo de pesquisa de posts

  @Get('search')
  search(@Query('q') search: string) {
    return this.postService.searchPosts(search);
  }

  // -------------------> Retorna todos os posts

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  // -------------------> Retorna um post específico

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  // -------------------> Cria um novo post

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createPostDto: CreatePostDto, @Req() req: Request) {
    return this.postService.create(createPostDto, req);
  }

  // -------------------> Atualiza um post

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postService.update(+id, req, updatePostDto);
  }

  // -------------------> Atualiza um post

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }

  // -------------------> Apaga todos os posts de um autor específico
 
  @Delete('author/:authorId')
  @UseGuards(JwtAuthGuard)
  removeAll(@Param('authorId') id: string) {
    return this.postService.deleteAllFromUser(+id);
  }
  // --------------------------------------------------------->
}
