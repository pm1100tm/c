import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';

@Entity({
  name: 'sign_up_type',
})
export class SignUpType {
  @PrimaryColumn({ type: 'tinyint' })
  id: number;

  @Column({ type: 'varchar', length: 8 })
  name: string;

  @OneToMany(() => User, (user) => user.signUpType)
  users: User[];

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  createdAt: Date;
}
