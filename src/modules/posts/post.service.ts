import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Post, Prisma, User } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Request } from 'express';
import { IDecodedJWT } from 'src/common/utils/decoded';
import { last } from 'rxjs';

@Injectable()
export class PostService {
  constructor(private readonly prisma: DatabaseService) {}

  // -------------------------------------------------------------------- //
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

  // -------------------------------------------------------------------- //
  async create(payload: CreatePostDto, req: Request): Promise<Post> {
    if (!payload) throw new BadRequestException('No input provided');
    const user = req.user as IDecodedJWT;
    const id = user.sub;
    try {
      const data: CreatePostDto = {
        ...payload,
        author: { connect: { id } },
      };

      return await this.prisma.post.create({ data });
    } catch (error) {
      throw new BadRequestException('Something went wrong');
    }
  }

  // -------------------------------------------------------------------- //
 

  async findAll() {
    return await this.prisma.post.findMany({include:  {author: {select: {firstname: true, lastname: true, profileImage: true}}}});
  }

  // -------------------------------------------------------------------- //
  async findAllBlogs() {
    return this.prisma.post.findMany({ where: { category: 'BLOG' }, include:  {author: {select: {firstname: true, lastname: true, profileImage: true}}}});
  }

  // -------------------------------------------------------------------- //
  async findAllArtigos() {
    return this.prisma.post.findMany({ where: { category: 'ARTIGO' }, include:  {author: {select: {firstname: true, lastname: true, profileImage: true}}}});
  }
  // -------------------------------------------------------------------- //
  async findOne(id: number): Promise<Post> {
    const post = await this.prisma.post.findUnique({ where: { id }, include: {author: {select:{firstname: true, lastname: true, profileImage: true }}} });

    if (!post) {
      throw new NotFoundException(`Post com ID ${id} não encontrado.`);
    }

    return post;
  }

  // -------------------------------------------------------------------- //
  async update(
    id: number,
    req: Request,
    data: UpdatePostDto,
  ): Promise<{ message: string }> {
    const u = req.user as IDecodedJWT;

    try {
      await this.prisma.post.update({
        where: { id },
        data,
      });
      return { message: 'Post Updated Succesfully' };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(
          `Post com ID ${id} não encontrado para atualização.`,
        );
      }
      throw new InternalServerErrorException('Erro ao atualizar o post.');
    }
  }

  // -------------------------------------------------------------------- //
  async remove(id: number): Promise<{ message: string }> {
    try {
      await this.prisma.post.delete({
        where: { id },
      });
      return { message: 'Post deleted succesfully' };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(
          `Post com ID ${id} não encontrado para exclusão.`,
        );
      }
      throw new InternalServerErrorException('Erro ao remover o post.');
    }
  }

  // -------------------------------------------------------------------- //
  async deleteAllFromUser(authorId: number): Promise<{ message: string }> {
    try {
      await this.prisma.post.deleteMany({ where: { authorId } });
      return { message: 'Deletion Completed' };
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  // -------------------------------------------------------------------- //
}
