import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('api/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // 🔍 Buscar posts por termo
  @Get('search')
  search(@Query('q') search: string) {
    return this.postService.searchPosts(search);
  }

  // ➕ Criar novo post
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  // 📃 Listar todos os posts
  @Get()
  findAll() {
    return this.postService.findAll();
  }

  // 🔎 Buscar post por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  // ✏️ Atualizar post por ID
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postService.update(+id, updatePostDto);
  }

  // ❌ Remover post por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}