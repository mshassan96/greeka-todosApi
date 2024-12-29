import { UUID } from 'crypto';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { GetTasksDto } from './dtos/get-tasks.dto';
import { ResponseDto } from './dtos/responses.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): Promise<ResponseDto<Task>>;
    update(id: UUID, updateTaskDto: UpdateTaskDto): Promise<ResponseDto<Task>>;
    delete(id: UUID): Promise<ResponseDto<Task>>;
    findOne(id: UUID): Promise<ResponseDto<Task>>;
    findAll(query: GetTasksDto): Promise<ResponseDto<Task[]>>;
}
