import {
  Component, EventEmitter, Input, OnChanges, Output, SimpleChanges,
} from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { TodoItem } from '../../types/TodoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnChanges {
  @Input() todos: Array<TodoItem> = [];

  @Input() isCompletedFilter: Boolean = false;

  @Output() toggle = new EventEmitter<TodoItem>();

  @Output() deleteItem = new EventEmitter<TodoItem>();

  @Output() deleteAll = new EventEmitter();

  icon = faTrashCan;

  rawTodos = [...this.todos];

  ngOnChanges(changes: SimpleChanges): void {
    this.rawTodos = [...changes['todos'].currentValue];
  }

  toggleCompleted(item: TodoItem) {
    this.toggle.emit(item);
  }

  handleDeleteAll() {
    this.deleteAll.emit();
  }

  handleDeleteItem(item: TodoItem) {
    this.deleteItem.emit(item);
  }
}
