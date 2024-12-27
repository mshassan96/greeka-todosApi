import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { GetTasksDto } from './dtos/get-tasks.dto';
import { UUID } from 'crypto';
import { formatResponse } from '@src/common/utils/response.util';
import { RESPONSE_MSG } from '@src/common/constants/response-messages.constant';
import { TaskPriority } from '@src/common/constants/priorities.constants';
import { TaskStatus } from '@src/common/constants/status.constants';
import { ResponseDto } from './dtos/responses.dto';
import { Task } from './entities/task.entity';

@ApiTags('Tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({ status: 201, description: 'Task created' })
  async create(
    @Body() createTaskDto: CreateTaskDto,
  ): Promise<ResponseDto<Task>> {
    const task = await this.taskService.create(createTaskDto);
    return formatResponse(true, RESPONSE_MSG.TASK.CREATED, task, 201);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a task' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Task updated' })
  async update(
    @Param('id') id: UUID,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<ResponseDto<Task>> {
    const updatedTask = await this.taskService.update(id, updateTaskDto);

    return formatResponse(true, RESPONSE_MSG.TASK.UPDATED, updatedTask, 200);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Task deleted' })
  async delete(@Param('id') id: UUID): Promise<ResponseDto<Task>> {
    const task = await this.taskService.delete(id);

    return formatResponse(true, RESPONSE_MSG.TASK.DELETED, task, 200);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single task by ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Task found' })
  async findOne(@Param('id') id: UUID): Promise<ResponseDto<Task>> {
    const data = await this.taskService.findOne(id);
    if (!data) {
      return formatResponse(false, RESPONSE_MSG.GENERAL.FAILURE, data, 200);
    }

    return formatResponse(true, RESPONSE_MSG.GENERAL.SUCCESS, data, 200);
  }

  @Get()
  @ApiOperation({ summary: 'Get list of tasks with pagination and filtering' })
  @ApiQuery({
    name: 'status',
    description: 'Filter tasks by status (Pending, Done, In Progress, Paused)',
    enum: TaskStatus,
    required: false,
  })
  @ApiQuery({
    name: 'priority',
    description: 'Filter tasks by priority (Red, Yellow, Blue)',
    enum: TaskPriority,
    required: false,
  })
  @ApiQuery({
    name: 'page',
    description: 'Page number for pagination (default: 0)',
    type: Number,
    required: false,
    example: 0,
  })
  @ApiQuery({
    name: 'limit',
    description: 'Number of tasks per page for pagination (default: 10)',
    type: Number,
    required: false,
    example: 10,
  })
  @ApiResponse({ status: 200, description: 'List of tasks' })
  async findAll(@Query() query: GetTasksDto): Promise<ResponseDto<Task[]>> {
    const tasks = await this.taskService.findAll(query);

    if (tasks.length <= 0) {
      return formatResponse(false, RESPONSE_MSG.GENERAL.FAILURE, [], 200);
    }

    return formatResponse(true, RESPONSE_MSG.GENERAL.SUCCESS, tasks, 200);
  }
}
