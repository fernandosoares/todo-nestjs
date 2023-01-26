import { Injectable } from '@nestjs/common';
import { TodoEntity } from 'src/entities/todo.entity';
import { TodoRepository } from 'src/repositories/todo.repository';

@Injectable()
export class TodoService {
  constructor(private todoRepository: TodoRepository) {}

  getAll() {
    return this.todoRepository.getAll();
  }

  findById(id: string) {
    return this.todoRepository.getOne(id);
  }

  create(todo: TodoEntity) {
    return this.todoRepository.create(todo);
  }

  update(id: string, todo: TodoEntity) {
    return this.todoRepository.update(id, todo);
  }

  delete(id: string) {
    return this.todoRepository.delete(id);
  }
}
