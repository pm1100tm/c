import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  getHello(): string {
    return 'test';
  }

  @Post('/')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
