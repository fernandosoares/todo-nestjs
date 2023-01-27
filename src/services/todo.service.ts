import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoEntity } from 'src/entities/todo.entity';
import { TodoRepository } from 'src/repositories/todo.repository';

@Injectable()
export class TodoService {
  constructor(private todoRepository: TodoRepository) {}

  async getAll(): Promise<TodoEntity[]> {
    return await this.todoRepository.getAll();
  }

  async findById(id: string): Promise<TodoEntity> {
    return await this.checkTodo(id);
  }

  async create(todo: TodoEntity): Promise<TodoEntity> {
    return await this.todoRepository.create(todo);
  }

  async update(id: string, todo: TodoEntity): Promise<TodoEntity> {
    if (this.checkTodo(id)) {
      return await this.todoRepository.update(id, todo);
    }
  }

  async delete(id: string): Promise<TodoEntity> {
    if (this.checkTodo(id)) {
      return await this.todoRepository.delete(id);
    }
  }

  private async checkTodo(id: string): Promise<TodoEntity> {
    const todo = await this.todoRepository.getOne(id);

    if (!todo) {
      throw new NotFoundException('TODO NOT FOUND', {
        cause: new Error(),
        description: 'No match for the provided ID',
      });
    }

    return todo;
  }
}
