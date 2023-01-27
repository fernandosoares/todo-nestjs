import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTodoDto } from 'src/dtos/create-todo.dto';
import { TodoEntity } from 'src/entities/todo.entity';
import { TodoService } from 'src/services/todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async getAll(): Promise<TodoEntity[]> {
    return await this.todoService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<TodoEntity> {
    return await this.todoService.findById(id);
  }

  @Post()
  async create(@Body() todo: CreateTodoDto): Promise<TodoEntity> {
    return await this.todoService.create(todo);
  }

  @Post(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() todo: CreateTodoDto,
  ): Promise<TodoEntity> {
    return await this.todoService.update(id, todo);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<TodoEntity> {
    return await this.todoService.delete(id);
  }
}
