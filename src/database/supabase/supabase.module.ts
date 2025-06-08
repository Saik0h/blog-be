import { Module } from '@nestjs/common';
import { SupabaseClient } from './supabase.client';

@Module({
  providers: [SupabaseClient],
  exports: [SupabaseClient]
})
export class SupabaseModule {}
