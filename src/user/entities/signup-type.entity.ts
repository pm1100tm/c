import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({
  name: 'sign_up_type',
  orderBy: { id: 'ASC' },
})
export class SignUpType {
  @PrimaryColumn({ type: 'tinyint', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 8 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;
}
