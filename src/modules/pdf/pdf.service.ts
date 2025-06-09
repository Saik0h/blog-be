import { Injectable, BadRequestException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { SupabaseClient } from 'src/database/supabase/supabase.client';

@Injectable()
export class PdfService {
  constructor(private readonly supabaseClient: SupabaseClient) {}

  async uploadPdf(file: Express.Multer.File): Promise<string> {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    const extension = path.extname(file.originalname).toLowerCase();
    if (extension !== '.pdf') {
      throw new BadRequestException('Only PDF files are allowed');
    }

    const fileName = `${uuidv4()}${extension}`;

    const { data, error } = await this.supabaseClient
      .getClient()
      .storage.from('pdf') // nome do bucket
      .upload(fileName, file.buffer, {
        contentType: 'application/pdf',
      });

    if (error) {
      console.error(error);
      throw new BadRequestException('Failed to upload PDF');
    }

    // Se for um bucket público:
    const { publicUrl } = this.supabaseClient
      .getClient()
      .storage.from('pdf')
      .getPublicUrl(fileName);

    return publicUrl;

    // Se for privado (opcional):
    // const { data: signedUrlData } = await this.supabase.storage
    //   .from('pdf-materials')
    //   .createSignedUrl(fileName, 60 * 60); // 1 hora
    // return signedUrlData.signedUrl;
  }
}
