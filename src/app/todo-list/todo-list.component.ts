import {
  Component, EventEmitter, Input, OnChanges, Output, SimpleChanges,
} from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { TodoItem } from '../../types/TodoItem';
import { FilterInput } from '../../types/Filter';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnChanges {
  @Input() todos: Array<TodoItem> = [];

  @Input() selectedFilter?: FilterInput;

  @Output() toggle = new EventEmitter<TodoItem>();

  @Output() deleteAll = new EventEmitter();

  isCompletedFilter = false;

  icon = faTrashCan;

  toggleCompleted(item: TodoItem) {
    this.toggle.emit(item);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isCompletedFilter = changes['selectedFilter']?.currentValue === 'completed';
  }

  handleDeleteAll() {
    this.deleteAll.emit();
  }
}
