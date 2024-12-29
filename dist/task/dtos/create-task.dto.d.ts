import { TaskStatus } from '../../common/constants/status.constants';
import { TaskPriority } from '../../common/constants/priorities.constants';
export declare class CreateTaskDto {
    name: string;
    dueDate: string;
    status: TaskStatus;
    priority: TaskPriority;
}
