import { Logger, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import { CreateUserDTO } from '../dto/create-user.dto';
import { ResponseUserDTO } from '../dto/response-user.dto';

@Injectable()
export class UserService {
  private logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(UserRepository)
    private usersRepository: UserRepository,
  ) {}

  async getUser(email: string): Promise<User> {
    this.logger.log(`getUser`);
    return await this.usersRepository.getUser(email);
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<ResponseUserDTO> {
    this.logger.log(`createUser`);
    const checkUser = await this.getUser(createUserDTO.email);

    if (checkUser) {
      if (!checkUser.isActive) {
        throw new HttpException('비활성유저', 409);
      }

      throw new HttpException('존재하는 계정', 400);
    }

    const user = await this.usersRepository.createUser(createUserDTO);

    const responseUser: ResponseUserDTO = new ResponseUserDTO();
    responseUser.email = user.email;

    return responseUser;
  }
}
