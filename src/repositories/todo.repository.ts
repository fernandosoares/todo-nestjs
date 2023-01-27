import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TodoEntity } from 'src/entities/todo.entity';

@Injectable()
export class TodoRepository {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<TodoEntity[]> {
    return await this.prisma.todo.findMany();
  }

  async getOne(id: string): Promise<TodoEntity> {
    return await this.prisma.todo.findFirst({
      where: {
        id,
      },
    });
  }

  async create(todo: TodoEntity): Promise<TodoEntity> {
    return await this.prisma.todo.create({
      data: todo,
    });
  }

  async update(id: string, todo: TodoEntity): Promise<TodoEntity> {
    return await this.prisma.todo.update({
      data: todo,
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<TodoEntity> {
    return await this.prisma.todo.delete({
      where: {
        id,
      },
    });
  }
}
