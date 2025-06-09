import { createClient } from '@supabase/supabase-js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupabaseClient {
  private client;
  constructor() {
    const supabaseUrl: string = process.env.SUPABASE_URL!;
    const serviceRoleKey: string = process.env.SUPABASE_SERVICE_ROLE_KEY!;

    this.client = createClient(supabaseUrl, serviceRoleKey);
  }

  getClient() {
    return this.client;
  }
}
