import { UserService } from './../../user/services/user.service';
import { Controller, Logger, Post, Body } from '@nestjs/common';
import { CreateUserDTO } from '../dto/create-user.dto';
import { ResponseUserDTO } from '../dto/response-user.dto';

@Controller('users')
export class UserController {
  private logger = new Logger(UserController.name);
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDTO): Promise<ResponseUserDTO> {
    this.logger.log(`createUser::${createUserDto}`);
    return this.userService.createUser(createUserDto);
  }
}
