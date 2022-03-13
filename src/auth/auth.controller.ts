import { AuthGuard } from '@nestjs/passport';
import {
  Controller,
  Logger,
  Post,
  Body,
  HttpCode,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDTO } from 'src/auth/login-user.dto';
import { ResponseDataDTO } from 'src/user/dto/response/response-data.dto';
import { User } from 'src/user/entities/user.entity';

@Controller('auth')
export class AuthController {
  private logger = new Logger(AuthController.name);
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('signin')
  signIn(@Body() loginUserDTO: LoginUserDTO): Promise<ResponseDataDTO> {
    return this.authService.login(loginUserDTO);
  }

  @HttpCode(200)
  @Get('test')
  @UseGuards(AuthGuard())
  authTest(@Req() req) {
    const user: User = req.user;
    // console.log(user.id);
    // console.log(user.email);
    // console.log(user.signUpType.id);
  }
}
