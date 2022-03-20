import {
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { LoginUserDTO } from '../dto/login-user.dto';
import { ResponseDataDTO } from 'src/user/dto/response/response-data.dto';
import { SocialSignUpType } from 'src/const/enum-const';
import * as bcrypt from 'bcryptjs';
import { MessageConstService } from 'src/const/message-const';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginUserDTO: LoginUserDTO): Promise<any> {
    const { email, password } = loginUserDTO;
    const user: User = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new HttpException(
        MessageConstService.ERROR_MSG_NO_USER_DATA,
        HttpStatus.NOT_FOUND,
      );
    }

    if (!user.isActive) {
      throw new HttpException(
        MessageConstService.ERROR_MSG_IS_ACTIVE_FALSE,
        HttpStatus.CONFLICT,
      );
    }

    if (user.signUpTypeId === SocialSignUpType.DEFAULT) {
      if (!(await bcrypt.compare(password, user.password))) {
        throw new HttpException(
          MessageConstService.ERROR_MSG_WRONG_USER_INFO,
          HttpStatus.UNAUTHORIZED,
        );
      }
    }

    const accessToken = await this.generateToken(email);

    const responseDataDTO = new ResponseDataDTO();
    responseDataDTO.msg = MessageConstService.SUCCESS_MSG
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
      throw new HttpException(
        MessageConstService.ERROR_MSG_INTERNAL_SERVER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
