import { IsArray, IsString } from 'class-validator';

export class CreateNewsDto {

  @IsString()
  title: string;

  @IsString()
  text: string;

  @IsArray()
  source?: string[];

  @IsArray()
  images: string[];
}
