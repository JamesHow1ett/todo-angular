import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

import { TodoItem } from '../../types/TodoItem';
import { formatDate } from '../../utils/utils';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})

export class ListItemComponent {
  formattedDate = formatDate;

  toogleCompleted() {
    this.toogle.emit(this.item);
  }

  @Input() item!: TodoItem;

  @Output() toogle = new EventEmitter<TodoItem>();
}
