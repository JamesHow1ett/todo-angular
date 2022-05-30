import { Component, ViewEncapsulation } from '@angular/core';
import StoreService from '../utils/storage';

import { TodoItem, NewTodo } from '../types/TodoItem';
import { FilterInput } from '../types/Filter';

const SAFE_ID_PREFIX = 'todo-item-id--';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  todoCounter = 0;

  todos: Array<TodoItem> = [];

  sortedTodos: Array<TodoItem> = [];

  selectedFilter: FilterInput = 'all';

  isCompletedFilter = false;

  private incrementId() {
    const step = () => {
      const result = this.todoCounter + 1;
      this.todoCounter += 1;
      return result;
    };
    return `${SAFE_ID_PREFIX}${step()}`;
  }

  private sortTodos(filter: FilterInput) {
    switch (filter) {
      case 'active':
        this.sortedTodos = [...this.todos].filter((todo) => !todo.completed);
        break;
      case 'completed':
        this.sortedTodos = [...this.todos].filter((todo) => todo.completed);
        break;
      default:
        this.sortedTodos = [...this.todos];
    }
  }

  toggleCompleted(item: TodoItem) {
    const updatedTodos: Array<TodoItem> = [...this.todos].map((todo) => (todo.id === item.id
      ? {
        ...todo,
        completed: !todo.completed,
      }
      : { ...todo }));

    StoreService.updateTodos(updatedTodos);
    this.todos = updatedTodos;
    this.sortTodos(this.selectedFilter);
  }

  addNewTodo(item: NewTodo) {
    const updatedTodos: Array<TodoItem> = [...this.todos, { ...item, id: this.incrementId() }];

    StoreService.updateTodos(updatedTodos);
    this.todos = updatedTodos;
    this.sortedTodos = updatedTodos;
  }

  updateFilter(filter: FilterInput): void {
    this.selectedFilter = filter;
    this.isCompletedFilter = filter === 'completed';

    this.sortTodos(filter);
  }

  deleteTodos() {
    this.todos = [];
    this.todoCounter = 0;
    this.sortedTodos = [];
  }

  deleteItem(item: TodoItem) {
    const updatedTodos: Array<TodoItem> = this.todos.filter((todo) => todo.id !== item.id);

    StoreService.updateTodos(updatedTodos);
    this.todos = updatedTodos;
    this.sortTodos(this.selectedFilter);
  }
}
