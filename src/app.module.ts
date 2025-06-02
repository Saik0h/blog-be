import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/users/user.module';
import { PostModule } from './modules/posts/post.module';
import { AuthModule } from './modules/auth/auth.module';
import { InboxModule } from './modules/inbox/inbox.module';
import { CurriculumModule } from './modules/curriculum/curriculum.module';
import { APP_GUARD } from '@nestjs/core';
import { AccessGuard } from './common/guards/access.guard';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TeachingInfoItemModule } from './modules/teaching-info/teaching-info.module';
import { ExperienceInfoModule } from './modules/experience-info/experience-info.module';

@Module({
  imports: [DatabaseModule, UserModule, PostModule, AuthModule, CurriculumModule, InboxModule, JwtModule.register({ global:true, secret: 'abcde', signOptions: { expiresIn: '1h' } }), TeachingInfoItemModule, ExperienceInfoModule],
  controllers: [AppController],
  providers: [AppService, JwtService, { provide: APP_GUARD, useClass: AccessGuard }],
})
export class AppModule { }
