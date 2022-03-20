import {
  IsEmail,
  IsNotEmpty,
  IsInt,
  IsString,
  IsOptional,
} from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password: string | null;

  @IsNotEmpty()
  @IsInt()
  signUpTypeId: number;
}
