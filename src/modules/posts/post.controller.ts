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
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Request } from 'express';
import { isPublic } from 'src/common/decorators/is-public.decorator';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // -------------------> Mecanismo de pesquisa de posts
  @Get('search')
  @isPublic()
  search(@Query('q') search: string) {
    return this.postService.searchPosts(search);
  }

  // -------------------> Retorna todos os posts

  @Get()
  @isPublic()
  findAll() {
    return this.postService.findAll();
  }

  // -------------------> Retorna todos os blogs

  @Get('blogs')
  @isPublic()
  findAllBlogs() {
    return this.postService.findAllBlogs();
  }

  // -------------------> Retorna todos os artigos

  @Get('artigos')
  @isPublic()
  findAllArtigos() {
    return this.postService.findAllArtigos();
  }

  // -------------------> Retorna um artigo específico

  @Get('artigos/:id')
  @isPublic()
  findOneArtigo(@Param('id') id: string) {
    return this.postService.findOneArtigo(+id);
  }

  // -------------------> Retorna um blog específico

  @Get('blogs/:id')
  @isPublic()
  findOneBlog(@Param('id') id: string) {
    return this.postService.findOneBlog(+id);
  }

  // -------------------> Retorna um post específico

  @Get(':id')
  @isPublic()
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  // -------------------> Cria um novo post

  @Post()
  create(@Body() createPostDto: CreatePostDto, @Req() req: Request) {
    return this.postService.create(createPostDto, req);
  }

  // -------------------> Atualiza um post

  @Patch(':id')
  update(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postService.update(+id, req, updatePostDto);
  }

  // -------------------> Atualiza um post

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }

  // -------------------> Apaga todos os posts de um autor específico

  @Delete('author/:authorId')
  removeAll(@Param('authorId') id: string) {
    return this.postService.deleteAllFromUser(+id);
  }
  // --------------------------------------------------------->
}
