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
import { Access } from 'src/common/decorators/access-level-decorator';

@Controller('api/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // -------------------> Mecanismo de pesquisa de posts

  @Get('search')
  @Access('public')
  search(@Query('q') search: string) {
    return this.postService.searchPosts(search);
  }

  // -------------------> Retorna todos os posts

  @Get()
  @Access('public')
  findAll() {
    return this.postService.findAll();
  }

  // -------------------> Retorna todos os blogs

  @Get('blogs')
  @Access('public')
  findAllBlogs() {
    return this.postService.findAllBlogs();
  }

  // -------------------> Retorna todos os artigos

  @Get('artigos')
  @Access('public')
  findAllArtigos() {
    return this.postService.findAllArtigos();
  }

  // -------------------> Retorna um post específico

  @Get(':id')
  @Access('public')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  // -------------------> Cria um novo post

  @Post()
  @UseGuards(JwtAuthGuard)
  @Access('restrict')
  create(@Body() createPostDto: CreatePostDto, @Req() req: Request) {
    return this.postService.create(createPostDto, req);
  }

  // -------------------> Atualiza um post

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @Access('restrict')
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
  @Access('restrict')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }

  // -------------------> Apaga todos os posts de um autor específico

  @Delete('author/:authorId')
  @Access('restrict')
  @UseGuards(JwtAuthGuard)
  removeAll(@Param('authorId') id: string) {
    return this.postService.deleteAllFromUser(+id);
  }
  // --------------------------------------------------------->
}
