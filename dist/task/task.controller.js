"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_task_dto_1 = require("./dtos/create-task.dto");
const update_task_dto_1 = require("./dtos/update-task.dto");
const get_tasks_dto_1 = require("./dtos/get-tasks.dto");
const task_service_1 = require("./task.service");
const response_util_1 = require("../common/utils/response.util");
const response_messages_constant_1 = require("../common/constants/response-messages.constant");
const priorities_constants_1 = require("../common/constants/priorities.constants");
const status_constants_1 = require("../common/constants/status.constants");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async create(createTaskDto) {
        const task = await this.taskService.create(createTaskDto);
        return (0, response_util_1.formatResponse)(true, response_messages_constant_1.RESPONSE_MSG.TASK.CREATED, task, 201);
    }
    async update(id, updateTaskDto) {
        const updatedTask = await this.taskService.update(id, updateTaskDto);
        return (0, response_util_1.formatResponse)(true, response_messages_constant_1.RESPONSE_MSG.TASK.UPDATED, updatedTask, 200);
    }
    async delete(id) {
        const task = await this.taskService.delete(id);
        return (0, response_util_1.formatResponse)(true, response_messages_constant_1.RESPONSE_MSG.TASK.DELETED, task, 200);
    }
    async findOne(id) {
        const data = await this.taskService.findOne(id);
        if (!data) {
            return (0, response_util_1.formatResponse)(false, response_messages_constant_1.RESPONSE_MSG.GENERAL.FAILURE, data, 200);
        }
        return (0, response_util_1.formatResponse)(true, response_messages_constant_1.RESPONSE_MSG.GENERAL.SUCCESS, data, 200);
    }
    async findAll(query) {
        const tasks = await this.taskService.findAll(query);
        if (tasks.length <= 0) {
            return (0, response_util_1.formatResponse)(false, response_messages_constant_1.RESPONSE_MSG.GENERAL.FAILURE, [], 200);
        }
        return (0, response_util_1.formatResponse)(true, response_messages_constant_1.RESPONSE_MSG.GENERAL.SUCCESS, tasks, 200);
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new task' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Task created' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a task' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task updated' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a task' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task deleted' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single task by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Task found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of tasks with pagination and filtering' }),
    (0, swagger_1.ApiQuery)({
        name: 'status',
        description: 'Filter tasks by status (Pending, Done, In Progress, Paused)',
        enum: status_constants_1.TaskStatus,
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'priority',
        description: 'Filter tasks by priority (Red, Yellow, Blue)',
        enum: priorities_constants_1.TaskPriority,
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        description: 'Page number for pagination (default: 0)',
        type: Number,
        required: false,
        example: 0,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        description: 'Number of tasks per page for pagination (default: 10)',
        type: Number,
        required: false,
        example: 10,
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of tasks' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_tasks_dto_1.GetTasksDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "findAll", null);
exports.TaskController = TaskController = __decorate([
    (0, swagger_1.ApiTags)('Tasks'),
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map