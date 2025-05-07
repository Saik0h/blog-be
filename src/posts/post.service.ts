import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PostService {
  constructor(private readonly server: DatabaseService) {}
  create(createPostDto: Prisma.PostCreateInput) {
    return this.server.post.create({ data: createPostDto });
  }

  async findAll() {
    return this.server.post.findMany({});
  }

  async findOne(id: number) {
    return this.server.post.findUnique({ where: { id } });
  }

  async update(id: number, updatePostDto: Prisma.PostUpdateInput) {
    return this.server.post.update({ where: { id }, data: updatePostDto });
  }

  async remove(id: number) {
    return this.server.post.delete({ where: { id } });
  }
}
