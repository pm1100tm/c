import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'user',
  orderBy: { id: 'DESC' },
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  nickname: string;

  @Column({ type: 'varchar', length: 60, nullable: true })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  // pk of sign_up_type table
  @Column({ type: 'tinyint', unsigned: true })
  signUpTypeId: number

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
