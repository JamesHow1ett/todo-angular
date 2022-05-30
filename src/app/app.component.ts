import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import StoreService from '../utils/storage';

import { TodoItem, NewTodo } from '../types/TodoItem';
import { FilterInput } from '../types/Filter';
import { SortDirection } from '../types/Sort';

const SAFE_ID_PREFIX = 'todo-item-id--';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  todoCounter = 0;

  todos: Array<TodoItem> = [];

  filteredTodos: Array<TodoItem> = [];

  selectedFilter: FilterInput = 'all';

  isCompletedFilter = false;

  ngOnInit(): void {
    this.todos = StoreService.getTodos() ?? [];
    this.filteredTodos = StoreService.getTodos() ?? [];
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
    this.filterTodos(this.selectedFilter);
  }

  addNewTodo(item: NewTodo) {
    const updatedTodos: Array<TodoItem> = [...this.todos, { ...item, id: this.incrementId() }];

    StoreService.updateTodos(updatedTodos);
    this.todos = updatedTodos;
    this.filteredTodos = updatedTodos;
  }

  updateFilter(filter: FilterInput): void {
    this.selectedFilter = filter;
    this.isCompletedFilter = filter === 'completed';

    this.filterTodos(filter);
  }

  deleteTodos() {
    this.todos = [];
    this.todoCounter = 0;
    this.filteredTodos = [];
    StoreService.removeTodos();
  }

  deleteItem(item: TodoItem) {
    const updatedTodos: Array<TodoItem> = this.todos.filter((todo) => todo.id !== item.id);

    StoreService.updateTodos(updatedTodos);
    this.todos = updatedTodos;
    this.filterTodos(this.selectedFilter);
  }

  sortTodos(sortDesc: SortDirection): void {
    let updatedTodos: Array<TodoItem>;

    switch (sortDesc) {
      case 'asc':
        updatedTodos = [...this.todos].sort((a, b) => a.createdAt - b.createdAt);

        break;
      case 'desc':
        updatedTodos = [...this.todos].sort((a, b) => b.createdAt - a.createdAt);
        break;
      default:
        updatedTodos = [...this.todos];
        break;
    }

    StoreService.updateTodos(updatedTodos);
    this.todos = updatedTodos;
    this.filterTodos(this.selectedFilter);
  }

  private incrementId() {
    const step = () => {
      const result = this.todoCounter + 1;
      this.todoCounter += 1;
      return result;
    };
    return `${SAFE_ID_PREFIX}${step()}`;
  }

  private filterTodos(filter: FilterInput) {
    switch (filter) {
      case 'active':
        this.filteredTodos = [...this.todos].filter((todo) => !todo.completed);
        break;
      case 'completed':
        this.filteredTodos = [...this.todos].filter((todo) => todo.completed);
        break;
      default:
        this.filteredTodos = [...this.todos];
        break;
    }
  }
}
