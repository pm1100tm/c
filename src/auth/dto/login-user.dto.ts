import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class LoginUserDTO {
  @IsNotEmpty()
  @MaxLength(30)
  @IsEmail()
  email: string;
}
