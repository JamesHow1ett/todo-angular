import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

import { TodoItem } from '../../types/TodoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  toggleCompleted(item: TodoItem) {
    this.toggle.emit(item);
  }

  @Input() todos: Array<TodoItem> = [];

  @Output() toggle = new EventEmitter<TodoItem>();
}
