import { describe, it, expect, beforeEach } from 'vitest';
import { TodoModel } from '../src/models/todo-model.js';

class MockStorage {
  constructor() { this.data = {}; }
  save(key, value) { this.data[key] = JSON.stringify(value); }
  load(key, def) { return this.data[key] ? JSON.parse(this.data[key]) : def; }
  remove(key) { delete this.data[key]; }
}

describe('TodoModel', () => {
  let model;
  beforeEach(() => {
    model = new TodoModel(new MockStorage());
  });

  it('adds a new todo', () => {
    model.addTodo('Write tests');
    expect(model.todos.length).toBe(1);
    expect(model.todos[0].text).toBe('Write tests');
  });

  it('toggles a todo', () => {
    model.addTodo('Toggle this');
    const id = model.todos[0].id;
    model.toggleComplete(id);
    expect(model.todos[0].completed).toBe(true);
  });

  it('updates a todo', () => {
    model.addTodo('Old');
    const id = model.todos[0].id;
    model.updateTodo(id, 'New');
    expect(model.todos[0].text).toBe('New');
  });

  it('deletes a todo', () => {
    model.addTodo('Remove me');
    const id = model.todos[0].id;
    model.deleteTodo(id);
    expect(model.todos.length).toBe(0);
  });
});
