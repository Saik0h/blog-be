import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/users/user.module';
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
import { BlogModule } from './modules/blog/blog.module';
import { ArticleModule } from './modules/article/article.module';
import { MaterialModule } from './modules/material/material.module';
import { CourseModule } from './modules/course/course.module';
import { PdfModule } from './modules/pdf/pdf.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, CurriculumModule, InboxModule, FaqModule, SupabaseModule, ImageModule, BlogModule, ArticleModule, MaterialModule, CourseModule, PdfModule],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtService, { provide: APP_GUARD, useClass: AccessGuard }],
})
export class AppModule { }
