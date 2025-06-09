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
export class ArticleService {
  constructor(private readonly prisma: DatabaseService) {}

  createArticle = async (req: Request, data: Prisma.ArticleCreateInput) => {
    const user = req.user! as DecodedJWT;
    await this.prisma.article.create({
      data: { ...data, author: { connect: { id: user.sub } } },
    });
    return { message: 'Article created' };
  };

  updateArticle = async (id: number, data: Prisma.ArticleUpdateInput) => {
    await this.prisma.article.update({ where: { id }, data });
    return { message: 'Article Updated' };
  };

  getAllArticles = async () => {
    return await this.prisma.article.findMany({
      include: {
        author: {
          select: { firstname: true, lastname: true, profileImage: true },
        },
      },
    });
  };

  getOneArticle = async (id: number) => {
    return await this.prisma.article.findUnique({
      where: { id },
      include: {
        author: {
          select: { firstname: true, lastname: true, profileImage: true },
        },
      },
    });
  };

  deleteArticle = async (req: Request, id: number) => {
    const user = req.user! as DecodedJWT;
    const article = await this.prisma.article.findUnique({ where: { id } });

    if (!user) throw new UnauthorizedException('Usuário precisa estar logado');
    if (!article) throw new NotFoundException('Post não encontrado');
    if (user.sub !== article.authorId)
      throw new ForbiddenException('Você só pode apagar seus próprios articles');

    await this.prisma.article.delete({ where: { id } });
    return { message: 'Article deleted' };
  };
}