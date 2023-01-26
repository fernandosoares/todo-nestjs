import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTodoDto } from 'src/dtos/create-todo.dto';
import { TodoService } from 'src/services/todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getAll() {
    return this.todoService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.todoService.findById(id);
  }

  @Post()
  create(@Body() todo: CreateTodoDto) {
    return this.todoService.create(todo);
  }

  @Post(':id')
  updateTodo(@Param('id') id: string, @Body() todo: CreateTodoDto) {
    return this.todoService.update(id, todo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.delete(id);
  }
}
