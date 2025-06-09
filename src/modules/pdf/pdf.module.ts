import { Module } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { PdfController } from './pdf.controller';
import { SupabaseClient } from 'src/database/supabase/supabase.client';

@Module({
  controllers: [PdfController],
  providers: [PdfService, SupabaseClient],
})
export class PdfModule {}
