import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDTO } from '../dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private logger = new Logger(UserRepository.name);

  async getUser(email: string): Promise<User> {
    this.logger.log(`getUser`);
    return await this.findOne({ where: { email: email } });
  }

  async createUser(CreateUserDTO: CreateUserDTO): Promise<User> {
    this.logger.log(`createUser`);
    const { email, password } = CreateUserDTO;
    const user = this.create({
      email,
      password,
    });

    return await this.save(user);
  }
}
