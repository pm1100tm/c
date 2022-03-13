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
    let query = null;

    try {
      query = this.createQueryBuilder('user')
        .innerJoinAndSelect('user.signUpType', 'signUpType')
        .select(['user.id', 'user.email', 'user.password', 'signUpType.id'])
        .where('user.email = :email', { email: email })
        .andWhere('user.isActive = :isActive', { isActive: true });
    } catch (e) {
      throw new Error(e);
    }

    return await query.getOne();
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
      throw new Error(e);
    }
  }
}
