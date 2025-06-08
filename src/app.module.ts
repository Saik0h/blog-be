import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/users/user.module';
import { PostModule } from './modules/posts/post.module';
import { AuthModule } from './modules/auth/auth.module';
import { InboxModule } from './modules/inbox/inbox.module';
import { CurriculumModule } from './modules/curriculum/curriculum.module';
import { FaqModule } from './modules/faq/faq.module';
import { APP_GUARD } from '@nestjs/core';
import { AccessGuard } from './common/guards/access.guard';
import { AuthService } from './modules/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { SupabaseModule } from './database/supabase/supabase.module';
import { ImageModule } from './modules/images/image.module';

@Module({
  imports: [DatabaseModule, UserModule, PostModule, AuthModule, CurriculumModule, InboxModule, FaqModule, SupabaseModule, ImageModule],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtService, { provide: APP_GUARD, useClass: AccessGuard }],
})
export class AppModule { }
