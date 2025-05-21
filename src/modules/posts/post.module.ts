import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [PostController],
  providers: [PostService, JwtService],
})
export class PostModule {}
