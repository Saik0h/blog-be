import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Prisma } from 'generated/prisma';
import { DecodedJWT } from 'src/common/utils/decoded';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: DatabaseService) {}

  createBlog = async (req: Request, data: Prisma.BlogCreateInput) => {
    const user = req.user! as DecodedJWT;
    await this.prisma.blog.create({
      data: { ...data, author: { connect: { id: user.sub } } },
    });
    return { message: 'Blog created' };
  };

  updateBlog = async (id: number, data: Prisma.BlogUpdateInput) => {
    await this.prisma.blog.update({ where: { id }, data });
    return { message: 'Blog Updated' };
  };

  getAllBlogs = async () => {
    return await this.prisma.blog.findMany({
      include: {
        author: {
          select: { firstname: true, lastname: true, profileImage: true },
        },
      },
    });
  };

  getOneBlog = async (id: number) => {
    return await this.prisma.blog.findUnique({
      where: { id },
      include: {
        author: {
          select: { firstname: true, lastname: true, profileImage: true },
        },
      },
    });
  };

  deleteBlog = async (req: Request, id: number) => {
    const user = req.user! as DecodedJWT;
    const blog = await this.prisma.blog.findUnique({ where: { id } });

    if (!user) throw new UnauthorizedException('Usuário precisa estar logado');
    if (!blog) throw new NotFoundException('Post não encontrado');
    if (user.sub !== blog.authorId)
      throw new ForbiddenException('Você só pode apagar seus próprios blogs');

    await this.prisma.blog.delete({ where: { id } });
    return { message: 'Blog deleted' };
  };
}
