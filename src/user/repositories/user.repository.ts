import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDTO } from '../dto/request/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  private logger = new Logger(UserRepository.name);

  async selectUserByEmail(email: string): Promise<User> {
    this.logger.log(`selectUserByEmail`);
    return await this.findOne({ where: { email: email } });
  }

  async selectActiveUserByEmail(email: string): Promise<User> {
    this.logger.log(`selectActiveUserByEmail`);
    return await this.findOne({ where: { email: email, isActive: true } });
  }

  async insertUser(CreateUserDTO: CreateUserDTO): Promise<void> {
    this.logger.log(`insertUser`);
    const { email, password, signUpType } = CreateUserDTO;
    const user = this.create({
      email,
      password,
      signUpType: { id: signUpType },
    });

    try {
      await this.save(user);
    } catch (e) {
      throw new Error('DatbaseError');
    }
  }
}
