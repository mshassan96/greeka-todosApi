import { TaskStatus } from '../../common/constants/status.constants';
import { TaskPriority } from '../../common/constants/priorities.constants';
export declare class GetTasksDto {
    status?: TaskStatus;
    priority?: TaskPriority;
    page: number;
    limit: number;
}
