import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { GetTasksDto } from './dtos/get-tasks.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create(createTaskDto);

    return this.taskRepository.save(task);
  }

  async update(id: UUID, updateTaskDto: UpdateTaskDto): Promise<Task> {
    await this.taskRepository.update(id, updateTaskDto);
    return this.taskRepository.findOne({ where: { id } });
  }

  async delete(id: UUID): Promise<any> {
    await this.taskRepository.update(id, { isDeleted: true });

    return this.taskRepository.findOne({ where: { id } });
  }

  async findOne(id: UUID): Promise<Task> {
    return this.taskRepository.findOne({ where: { id, isDeleted: false } });
  }

  async findAll(query: GetTasksDto): Promise<Task[]> {
    const { status, priority, page, limit } = query;
    const skip = page * limit;

    return this.taskRepository.find({
      where: { status, priority, isDeleted: false },
      skip,
      take: limit,
    });
  }
}
