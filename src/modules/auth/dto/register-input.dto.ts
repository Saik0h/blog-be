import { IsString, MinLength } from 'class-validator';

export class RegisterInputDto {
  @IsString()
  username: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  firstname?: string;

  @IsString()
  lastname?: string;
}
