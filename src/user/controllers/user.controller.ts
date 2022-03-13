import { Controller, Logger, Post, Body, HttpCode } from '@nestjs/common';
import { UserService } from './../../user/services/user.service';
import { CreateUserDTO } from '../dto/request/create-user.dto';
import { ResponseDataDTO } from '../dto/response/response-data.dto';

@Controller('users')
export class UserController {
  private logger = new Logger(UserController.name);
  constructor(private readonly userService: UserService) {}

  @HttpCode(201)
  @Post()
  createUser(@Body() createUserDto: CreateUserDTO): Promise<ResponseDataDTO> {
    this.logger.log(`createUser::${JSON.stringify(createUserDto)}`);
    return this.userService.createUser(createUserDto);
  }
}
