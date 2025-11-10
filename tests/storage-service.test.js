import { describe, it, expect, beforeEach } from 'vitest';
import { StorageService } from '../src/services/storage-service.js';

/**
 * Mock localStorage to simulate browser storage in Node
 */
class MockLocalStorage {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] ?? null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }

  key(index) {
    return Object.keys(this.store)[index];
  }

  clear() {
    this.store = {};
  }

  get length() {
    return Object.keys(this.store).length;
  }
}

describe('StorageService', () => {
  let mockStorage;
  let service;

  beforeEach(() => {
    mockStorage = new MockLocalStorage();

    service = new StorageService('todo', mockStorage);
  });

  it('saves and loads data correctly', () => {
    const data = [{ text: 'Test Todo', completed: false }];
    service.save('todos', data);

    const result = service.load('todos', []);
    expect(result).toEqual(data);
  });

  it('returns default value if key not found', () => {
    const result = service.load('missing', ['default']);
    expect(result).toEqual(['default']);
  });

  it('removes an item from storage', () => {
    service.save('temp', { message: 'delete me' });
    service.remove('temp');
    const result = service.load('temp', null);
    expect(result).toBeNull();
  });

  it('clears all items for this app while leaving unrelated keys', () => {
    mockStorage.setItem('unrelated', 'keep-me');

    service.save('todos_1', { id: 1 });
    service.save('todos_2', { id: 2 });

    service.clear();

    expect(service.load('todos_1', null)).toBeNull();
    expect(service.load('todos_2', null)).toBeNull();

    expect(mockStorage.getItem('unrelated')).toBe('keep-me');
    expect(mockStorage.length).toBe(1);
  });
});
