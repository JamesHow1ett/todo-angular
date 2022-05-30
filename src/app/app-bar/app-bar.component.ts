import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { faArrowUp, faArrowDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { FilterInput, Filter } from '../../types/Filter';
import { SortDirection } from '../../types/Sort';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent {
  @Input() selectedFilter: FilterInput = 'all';

  @Output() updateFilter = new EventEmitter<FilterInput>();

  @Output() sortTodos = new EventEmitter<SortDirection>();

  filters: Array<Filter> = [
    {
      title: 'All',
      value: 'all',
    },
    {
      title: 'Active',
      value: 'active',
    },
    {
      title: 'Completed',
      value: 'completed',
    },
  ];

  sortDesc?: SortDirection;

  sortDescIcon?: IconDefinition;

  selectFilter(filter: FilterInput) {
    this.updateFilter.emit(filter);
  }

  sortItems(isActiveTab: boolean) {
    if (!isActiveTab) {
      return;
    }

    this.updateSort();

    this.sortTodos.emit(this.sortDesc);
  }

  private static computedIcon = (sortDesc: SortDirection): IconDefinition => (
    sortDesc === 'asc' ? faArrowUp : faArrowDown
  );

  private updateSort() {
    if (this.sortDesc) {
      this.sortDesc = this.sortDesc === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortDesc = 'desc';
    }

    this.sortDescIcon = AppBarComponent.computedIcon(this.sortDesc);
  }
}
