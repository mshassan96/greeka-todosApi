import { IsEnum, IsNotEmpty, IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../../common/constants/status.constants';
import { TaskPriority } from '../../common/constants/priorities.constants';

export class CreateTaskDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dueDate: string;

  @ApiProperty()
  @IsEnum(TaskStatus, { message: 'Invalid task status' })
  status: TaskStatus;

  @ApiProperty()
  @IsEnum(TaskPriority, { message: 'Invalid task priority' })
  priority: TaskPriority;
}
