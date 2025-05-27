import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/users/user.module';
import { PostModule } from './modules/posts/post.module';
import { AuthModule } from './modules/auth/auth.module';
import { InboxModule } from './modules/inbox/inbox.module';
import { CurriculumModule } from './modules/curriculum/curriculum.module';

@Module({
  imports: [DatabaseModule, UserModule, PostModule, AuthModule, CurriculumModule ,InboxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
