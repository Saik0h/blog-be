import { IsNotEmpty, IsString } from 'class-validator';

export class ChangePasswordDto {
  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  newPassword: string;

  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  newPasswordConfirmation: string;

  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  currentPassword: string;
}
