import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Profile } from './profile.entity';
import { SignUpType } from './signup-type.entity';

@Entity({
  name: 'user',
  orderBy: { id: 'DESC' },
})
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'varchar', length: 30, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  nickname: string;

  @Column({ type: 'varchar', length: 60, nullable: true })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @ManyToOne(() => SignUpType, (signUpType) => signUpType.users)
  signUpType: SignUpType;
}
