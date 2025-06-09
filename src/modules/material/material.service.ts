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
export class MaterialService {
  constructor(private readonly prisma: DatabaseService) {}

  createMaterial = async (req: Request, data: Prisma.MaterialCreateInput) => {
    const user = req.user! as DecodedJWT;
    await this.prisma.material.create({
      data: { ...data, author: { connect: { id: user.sub } } },
    });
    return { message: 'Material created' };
  };

  updateMaterial = async (id: number, data: Prisma.MaterialUpdateInput) => {
    await this.prisma.material.update({ where: { id }, data });
    return { message: 'Material Updated' };
  };

  getAllMaterials = async () => {
    return await this.prisma.material.findMany({
      include: {
        author: {
          select: { firstname: true, lastname: true, profileImage: true },
        },
      },
    });
  };

  getOneMaterial = async (id: number) => {
    return await this.prisma.material.findUnique({
      where: { id },
      include: {
        author: {
          select: { firstname: true, lastname: true, profileImage: true },
        },
      },
    });
  };

  deleteMaterial = async (req: Request, id: number) => {
    const user = req.user! as DecodedJWT;
    const material = await this.prisma.material.findUnique({ where: { id } });

    if (!user) throw new UnauthorizedException('Usuário precisa estar logado');
    if (!material) throw new NotFoundException('Post não encontrado');
    if (user.sub !== material.authorId)
      throw new ForbiddenException('Você só pode apagar seus próprios materials');

    await this.prisma.material.delete({ where: { id } });
    return { message: 'Material deleted' };
  };
}
