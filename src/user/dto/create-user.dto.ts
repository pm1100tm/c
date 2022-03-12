import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @MaxLength(12)
  public password: string;
}
