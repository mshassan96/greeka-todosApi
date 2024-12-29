/// <reference types="node" />
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { GetTasksDto } from './dtos/get-tasks.dto';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    update(id: UUID, updateTaskDto: UpdateTaskDto): Promise<Task>;
    delete(id: UUID): Promise<any>;
    findOne(id: UUID): Promise<Task>;
    findAll(query: GetTasksDto): Promise<Task[]>;
}
