import { Controller, Get, Post, Body,Param, Delete, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';


@Controller('task')
export class TaskController {
  constructor(private readonly TaskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.TaskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.TaskService.findAll();
  }

  @Get('filter')
  findOne(@Query('title') title: string) {
    return this.TaskService.findOne(title);
  }

  @Delete(':title')
  remove(@Param('title') title: string):Promise<void> {
    return this.TaskService.remove(title);
  }
}
