import { Controller, Logger, Post, Body, HttpCode, Get } from '@nestjs/common';
import { UserService } from './../../user/services/user.service';
import { CreateUserDTO } from '../dto/request/create-user.dto';
import { ResponseDataDTO } from '../dto/response/response-data.dto';
import { createQueryBuilder } from 'typeorm';

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

  @HttpCode(201)
  @Get('test')
  test() {
    return this.userService.test()
  }
}
