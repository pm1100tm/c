import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/services/user.service';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private logger = new Logger(JwtStrategy.name)

  constructor(
    private readonly configService: ConfigService,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload) {
    this.logger.log(`validate::${payload}`);
    const { email, exp } = payload;
    const user: User = await this.userService.getActiveUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException
    }

    return user;
  }
}
