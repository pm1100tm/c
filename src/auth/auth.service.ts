import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './../user/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { LoginUserDTO } from './login-user.dto';
import { ResponseDataDTO } from 'src/user/dto/response/response-data.dto';
import { SocialSignUpType } from 'src/const/enum-const';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginUserDTO: LoginUserDTO): Promise<any> {
    const { email, password } = loginUserDTO;
    const user: User = await this.userService.getActiveUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('No User Data');
    }

    if (user.signUpType.id === SocialSignUpType.DEFAULT) {
      if (!(await bcrypt.compare(password, user.password))) {
        throw new UnauthorizedException('Plaese check your id or password');
      }
    }

    const accessToken = await this.generateToken(email);

    const responseDataDTO = new ResponseDataDTO();
    responseDataDTO.msg = 'success';
    responseDataDTO.statudCode = HttpStatus.OK;
    responseDataDTO.data = { accessToken: accessToken };

    return responseDataDTO;
  }

  async generateToken(email: string): Promise<string> {
    try {
      const payload = { email };
      console.log(this.jwtService.sign(payload));

      return this.jwtService.sign(payload);
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException('엑세스 토큰 못 만들었음');
    }
  }
}
