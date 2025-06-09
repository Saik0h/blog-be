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
export class CourseService {
  constructor(private readonly prisma: DatabaseService) {}

  createCourse = async (req: Request, data: Prisma.CourseCreateInput) => {
    const user = req.user! as DecodedJWT;
    await this.prisma.course.create({
      data: { ...data, author: { connect: { id: user.sub } } },
    });
    return { message: 'Course created' };
  };

  updateCourse = async (id: number, data: Prisma.CourseUpdateInput) => {
    await this.prisma.course.update({ where: { id }, data });
    return { message: 'Course Updated' };
  };

  getAllCourses = async () => {
    return await this.prisma.course.findMany({
      include: {
        author: {
          select: { firstname: true, lastname: true, profileImage: true },
        },
      },
    });
  };

  getOneCourse = async (id: number) => {
    return await this.prisma.course.findUnique({
      where: { id },
      include: {
        author: {
          select: { firstname: true, lastname: true, profileImage: true },
        },
      },
    });
  };

  deleteCourse = async (req: Request, id: number) => {
    const user = req.user! as DecodedJWT;
    const course = await this.prisma.course.findUnique({ where: { id } });

    if (!user) throw new UnauthorizedException('Usuário precisa estar logado');
    if (!course) throw new NotFoundException('Post não encontrado');
    if (user.sub !== course.authorId)
      throw new ForbiddenException('Você só pode apagar seus próprios courses');

    await this.prisma.course.delete({ where: { id } });
    return { message: 'Course deleted' };
  };
}
