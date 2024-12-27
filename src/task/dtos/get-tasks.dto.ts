import { IsEnum, IsOptional, IsInt, Min, Max } from 'class-validator';
import { TaskStatus } from '../../common/constants/status.constants';
import { TaskPriority } from '../../common/constants/priorities.constants';

export class GetTasksDto {
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;

  @IsEnum(TaskPriority)
  @IsOptional()
  priority?: TaskPriority;

  @IsInt()
  @Min(0)
  @Max(100)
  @IsOptional()
  page: number = 0;

  @IsInt()
  @Min(1)
  @Max(100)
  @IsOptional()
  limit: number = 10;
}
