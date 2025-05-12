import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Post } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly prisma: DatabaseService) {}

  // 🔍 Busca posts por título ou texto (filtro case-insensitive)
  async searchPosts(query: string): Promise<Post[]> {
    return this.prisma.post.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { text: { contains: query, mode: 'insensitive' } },
        ],
      },
    });
  }

  // ➕ Cria novo post
  async create(data: CreatePostDto): Promise<Post> {
    try {
      return await this.prisma.post.create({ data });
    } catch (error) {
      throw new InternalServerErrorException('Deu n man, tenta denovo');
    }
  }

  // 📃 Lista todos os posts
  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  // 🔎 Busca post por ID
  async findOne(id: number): Promise<Post> {
    const post = await this.prisma.post.findUnique({ where: { id } });

    if (!post) {
      throw new NotFoundException(`Post com ID ${id} não encontrado.`);
    }

    return post;
  }

  // ✏️ Atualiza post cujo ID foi passado como parâmetro.
  async update(id: number, data: UpdatePostDto): Promise<Post> {
    try {
      return await this.prisma.post.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(
          `Post com ID ${id} não encontrado para atualização.`,
        );
      }
      throw new InternalServerErrorException('Erro ao atualizar o post.');
    }
  }

  // ❌ Remove post cujo ID foi passado como parâmetro.
  async remove(id: number): Promise<Post> {
    try {
      return await this.prisma.post.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(
          `Post com ID ${id} não encontrado para exclusão.`,
        );
      }
      throw new InternalServerErrorException('Erro ao remover o post.');
    }
  }
}
