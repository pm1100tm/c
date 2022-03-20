import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'profile',
  orderBy: {},
})
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'blob', nullable: true })
  photo: string;

  @Column({ type: 'varchar', length: 30, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  displayName: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone: string;

  @Column({ type: 'tinyint', unsigned: true })
  timezone: number;

  // pk of user table
  @Column({type: 'int'})
  userId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
