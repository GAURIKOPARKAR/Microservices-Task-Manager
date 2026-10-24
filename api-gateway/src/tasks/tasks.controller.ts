
import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('tasks')
export class TasksController {
  constructor(
    @Inject('TASK_SERVICE')
    private readonly taskClient: ClientProxy,
  ) {}

  @Get()
  getAllTasks() {
    return this.taskClient.send('findAllTasks', {});
  }
}
