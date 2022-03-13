import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './../user/controllers/user.controller';
import { UserService } from './../user/services/user.service';
import { Profile } from './entities/profile.entity';
import { SignUpType } from './entities/signup-type.entity';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, Profile, SignUpType])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
