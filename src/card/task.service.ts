import { BadGatewayException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)private readonly taskRepository:Repository<Task>,
  ){}

  
  async create(task: CreateTaskDto):Promise<Task> {
    try{
      const newTask: Task= this.taskRepository.create({
        title:task.title,
        description:task.description
      });
      return await this.taskRepository.save(newTask);
    }catch(err){
      throw new BadGatewayException('task service: error creating task');
    }
  };
card
  async findAll():Promise<Task[]> {
    try{
      return await this.taskRepository.find();
    }catch(err){
      throw new BadGatewayException('taskService:error getting tasks')
    }
  };

 async findOne(query:string):Promise<Task[]> {
    try{
      const task= await this.taskRepository.find({
        where:{title: ILike(`%${query}%`),
      },
    });

      if(!task){
        throw new NotFoundException(`task with title "${query}" not found`)
      }
      return task
    }catch(err){
      throw new BadGatewayException('task service: error getting task by title');
    }
  };

 async remove(title:string) {
    try{
      const result= await this.taskRepository.delete({title});
      if (result.affected===0){
        throw new NotFoundException(`task with title "${title}" not found`);
      }
    }catch(err){
      throw new BadGatewayException('taskService: errror deleting task')
    }
  }
};
