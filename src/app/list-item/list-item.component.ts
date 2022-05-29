import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { TodoItem } from '../../types/TodoItem';
import { formatDate } from '../../utils/utils';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})

export class ListItemComponent {
  @Input() item!: TodoItem;

  @Input() isCompletedFilter: Boolean = false;

  @Output() toogle = new EventEmitter<TodoItem>();

  icon = faTrashCan;

  formattedDate = formatDate;

  toogleCompleted() {
    this.toogle.emit(this.item);
  }
}
