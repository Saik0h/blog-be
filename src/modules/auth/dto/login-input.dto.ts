import { IsString, MinLength } from 'class-validator';

export class LoginInputDto {
  @IsString()
  username: string;

  @IsString()
  @MinLength(6)
  password: string;
}