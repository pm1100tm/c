import { Injectable } from '@nestjs/common';
import { UserService } from './../user/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { LoginUserDTO } from './login-user.dto';
import { SocialSignUpType } from 'src/const/enum-const';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginUserDTO: LoginUserDTO): Promise<any> {
    console.log('asldkfjalskdfj');
    const { email, password } = loginUserDTO;
    const user = await this.userService.getActiveUserByEmail(email);

    console.log(user.signUpType);

    return null;
  }

  async login(user: User) {
    const payload = { username: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
