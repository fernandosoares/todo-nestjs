import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TodoController } from 'src/controllers/todo.controller';
import { TodoRepository } from 'src/repositories/todo.repository';
import { TodoService } from 'src/services/todo.service';

@Module({
  controllers: [TodoController],
  providers: [PrismaService, TodoService, TodoRepository],
})
export class TodoModule {}
