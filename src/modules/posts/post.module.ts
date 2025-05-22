import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({ secret: 'abcde', signOptions: { expiresIn: '1h' } }),
  ],
  controllers: [PostController],
  providers: [PostService, JwtService],
})
export class PostModule {}
