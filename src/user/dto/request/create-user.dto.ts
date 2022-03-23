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

  @IsNotEmpty()
  @IsInt()
  signUpTypeId: number;
}
