import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('check-env')
  checkEnv(): string {
    console.log(process.env.SECRET);
    console.log(process.env.DATABASE_HOST);
    console.log(process.env.DATABASE_PORT);
    console.log(process.env.DATABASE_USERNAME);
    console.log(process.env.DATABASE_PASSWORD);
    console.log(process.env.DATABASE_NAME);
    console.log(process.env.DATABASE_SYNCHRONIZE);
    return 'DONE';
  }
}
