import { Component, ViewEncapsulation } from '@angular/core';
import StoreService from '../utils/storage';

import { TodoItem, NewTodo } from '../types/TodoItem';
import { FilterInput } from '../types/Filter';

const SAFE_ID_PREFIX = 'todo-item-id--';
const safeId = (sufix: number) => `${SAFE_ID_PREFIX}${sufix}`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  todos: Array<TodoItem> = [];

  sortedTodos: Array<TodoItem> = [];

  selectedFilter: FilterInput = 'all';

  isCompletedFilter = false;

  toggleCompleted(item: TodoItem) {
    const updatedTodos: Array<TodoItem> = [...this.todos].map((todo) => (todo.id === item.id
      ? {
        ...todo,
        completed: !todo.completed,
      }
      : { ...todo }));

    StoreService.updateTodos(updatedTodos);
    this.todos = updatedTodos;
  }

  addNewTodo(item: NewTodo) {
    const lastIdPrefix = this.todos.length + 1;
    const updatedTodos: Array<TodoItem> = [...this.todos, { ...item, id: safeId(lastIdPrefix) }];

    StoreService.updateTodos(updatedTodos);
    this.todos = updatedTodos;
  }

  updateFilter(filter: FilterInput): void {
    this.selectedFilter = filter;
    this.isCompletedFilter = filter === 'completed';
  }

  deleteTodos() {
    this.todos = [];
  }
}
