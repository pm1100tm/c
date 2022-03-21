import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { SignUpType } from './signup-type.entity';

@Entity({
  name: 'user',
  orderBy: { id: 'DESC' },
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 60, nullable: true })
  password: string;

  @Column({ type: 'varchar', length: 30, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  displayName: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone: string;

  @Column({ type: 'tinyint', unsigned: true })
  timezone: number;

  @Column({ type: 'blob', nullable: true })
  thumbnailUrlLarge: string;
  
  @Column({ type: 'blob', nullable: true })
  thumbnailUrlMedium: string;
  
  @Column({ type: 'blob', nullable: true })
  thumbnailUrlSmall: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => SignUpType, (signUpType) => signUpType.users)
  @JoinColumn({ name: 'signUpTypeId' })
  signUpType: SignUpType
  @Column()
  signUpTypeId: number

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
