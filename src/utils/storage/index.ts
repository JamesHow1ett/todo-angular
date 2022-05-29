import { TodoItem } from '../../types/TodoItem';
import * as keys from './keys';

class StoreService {
  static updateTodos = (todos: Array<TodoItem>) => this.setToStorege(keys.SET_TODOS, todos);

  private static setToStorege(key: string, value: any): void {
    if (window.localStorage.getItem(key)) {
      window.localStorage.removeItem(key);
    }

    const item = JSON.stringify(value);
    window.localStorage.setItem(key, item);
  }
}

export default StoreService;
