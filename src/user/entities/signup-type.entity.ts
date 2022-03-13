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
  orderBy: { id: 'DESC' },
})
export class SignUpType {
  @PrimaryColumn({ type: 'tinyint' })
  id: number;

  @Column({ type: 'varchar', length: 8 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => User, (user) => user.signUpType)
  users: User[];
}
