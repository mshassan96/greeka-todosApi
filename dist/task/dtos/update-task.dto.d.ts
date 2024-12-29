import { TaskStatus } from '../../common/constants/status.constants';
import { TaskPriority } from '../../common/constants/priorities.constants';
export declare class UpdateTaskDto {
    name?: string;
    dueDate?: string;
    status?: TaskStatus;
    priority?: TaskPriority;
    isActive?: boolean;
    isDeleted?: boolean;
}
