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
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({
    type: 'varchar',
    unique: true,
    name: 'social_unique_id',
  })
  socialUniqueId: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true, name: 'display_name' })
  displayName: string;

  @Column({ type: 'varchar', nullable: true })
  phone: string;

  @Column({ type: 'tinyint', unsigned: true })
  timezone: number;

  @Column({ type: 'varchar', nullable: true, name: 'thumbnail_url_large' })
  thumbnailUrlLarge: string;

  @Column({ type: 'varchar', nullable: true, name: 'thumbnail_url_medium' })
  thumbnailUrlMedium: string;

  @Column({ type: 'varchar', nullable: true, name: 'thumbnail_url_small' })
  thumbnailUrlSmall: string;

  @Column({ type: 'tinyint', default: true, name: 'is_active' })
  isActive: boolean;

  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => SignUpType, (signUpType) => signUpType.users)
  @JoinColumn({ name: 'signUpTypeId' })
  signUpType: SignUpType;

  @Column({ name: 'sign_up_type_id' })
  signUpTypeId: number;
}
