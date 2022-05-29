import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

import { FilterInput, Filter } from '../../types/Filter';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent {
  @Input() selectedFilter: FilterInput = 'all';

  @Output() updateFilter = new EventEmitter<FilterInput>();

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

  selectFilter(filter: FilterInput) {
    this.updateFilter.emit(filter);
  }
}
