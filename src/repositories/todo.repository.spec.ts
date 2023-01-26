import { TodoRepository } from './todo.repository';

describe('TodoRepository', () => {
  it('should be defined', () => {
    expect(new TodoRepository()).toBeDefined();
  });
});
