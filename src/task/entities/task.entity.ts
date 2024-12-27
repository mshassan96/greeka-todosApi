import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TaskStatus } from '../../common/constants/status.constants';
import { TaskPriority } from '../../common/constants/priorities.constants';
import { Exclude } from 'class-transformer';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  dueDate: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  status: TaskStatus;

  @Column({
    type: 'enum',
    enum: TaskPriority,
    default: TaskPriority.BLUE,
  })
  priority: TaskPriority;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @Exclude()
  @Column({ default: false })
  isDeleted: boolean;
}
