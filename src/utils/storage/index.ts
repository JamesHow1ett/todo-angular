import { TodoItem } from '../../types/TodoItem';
import * as keys from './keys';

class StoreService {
  static updateTodos = (todos: Array<TodoItem>) => this.setToStorege(keys.TODOS_KEY, todos);

  static removeTodos = () => this.removeItem(keys.TODOS_KEY);

  static getTodos = () => this.getItem(keys.TODOS_KEY);

  private static getItem(key: string): Array<TodoItem> | null {
    const item: string | null = window.localStorage.getItem(key);

    if (!item) {
      return null;
    }

    return JSON.parse(item);
  }

  private static setToStorege(key: string, value: any): void {
    if (window.localStorage.getItem(key)) {
      window.localStorage.removeItem(key);
    }

    const item = JSON.stringify(value);
    window.localStorage.setItem(key, item);
  }

  private static removeItem(key: string): void {
    if (window.localStorage.getItem(key)) {
      window.localStorage.removeItem(key);
    }
  }
}

export default StoreService;
