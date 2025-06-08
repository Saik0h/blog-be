// src/image/image.controller.ts
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import { AuthenticatedAccess } from 'src/common/decorators/authenticated-access.decorator';


@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @AuthenticatedAccess()
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Body('folder') folder: string, 
  ) {
    const url = await this.imageService.uploadImage(file, folder);
    return { url };
  }
}
