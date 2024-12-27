import {
  IsString,
  IsEnum,
  IsDateString,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { TaskStatus } from '../../common/constants/status.constants';
import { TaskPriority } from '../../common/constants/priorities.constants';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  dueDate?: string;

  @ApiProperty()
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @ApiProperty()
  @IsEnum(TaskPriority)
  @IsOptional()
  priority?: TaskPriority;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isDeleted?: boolean;
}
