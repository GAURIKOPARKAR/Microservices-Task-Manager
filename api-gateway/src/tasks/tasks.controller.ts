
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';  

@Controller('tasks')
export class TasksController {
  constructor(
    @Inject('TASK_SERVICE')
    private readonly taskClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskClient.send('createTask', createTaskDto);
  }

  @Get()
  findAll() {
    return this.taskClient.send('findAllTasks', {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskClient.send('findOneTask', id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: UpdateTaskDto,
  ) {
    return this.taskClient.send('updateTask', { id, data });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskClient.send('removeTask', id);
  }
}
