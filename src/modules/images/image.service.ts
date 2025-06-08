import { Injectable } from '@nestjs/common';
import { SupabaseClient } from 'src/database/supabase/supabase.client';
import * as path from 'path';
@Injectable()
export class ImageService {
  constructor(private readonly supabaseClient: SupabaseClient) {}

  async uploadImage(
    file: Express.Multer.File,
    folder: string,
  ): Promise<string> {
    const fileExt = path.extname(file.originalname);
    const fileName = `${folder}/${Date.now()}-${Math.round(Math.random() * 1e9)}${fileExt}`;

    const { data, error } = await this.supabaseClient
      .getClient()
      .storage.from('images')
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
      });

    if (error) {
      throw new Error(`Erro ao fazer upload: ${error.message}`);
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    return `${supabaseUrl}/storage/v1/object/public/images/${fileName}`;
  }

  async deleteImage(filePath: string): Promise<boolean> {
    const { error } = await this.supabaseClient
      .getClient()
      .storage.from('images')
      .remove([filePath]);

    if (error) {
      throw new Error(`Erro ao deletar imagem: ${error.message}`);
    }

    return true;
  }
}
