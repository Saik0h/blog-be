import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { SupabaseClient } from 'src/database/supabase/supabase.client';

@Module({
  controllers: [ImageController],
  providers: [ImageService, SupabaseClient],
})
export class ImageModule {}