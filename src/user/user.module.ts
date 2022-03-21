import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './../user/controllers/user.controller';
import { UserService } from './../user/services/user.service';
import { SignUpType } from './entities/signup-type.entity';
import { UserRepository } from './repositories/user.repository';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [TypeOrmModule.forFeature([UserRepository, SignUpType])],
})
export class UserModule {}
