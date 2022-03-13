import { Controller, Logger, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDTO } from 'src/auth/login-user.dto';
import { ResponseDataDTO } from 'src/user/dto/response/response-data.dto';

@Controller('auth')
export class AuthController {
  private logger = new Logger(AuthController.name);
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('signin')
  signIn(@Body() loginUserDTO: LoginUserDTO): Promise<ResponseDataDTO> {
    this.authService.validateUser(loginUserDTO);
    return null;
  }
}
