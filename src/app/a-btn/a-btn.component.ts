import {
  Component, EventEmitter, Input, OnChanges, Output, SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-a-btn',
  templateUrl: './a-btn.component.html',
  styleUrls: ['./a-btn.component.scss'],
})
export class ABtnComponent implements OnChanges {
  @Input() color: string = '';

  @Input() size: string = '';

  @Output() clickBtn = new EventEmitter<Event>();

  computedClasses: Record<string, boolean> = {};

  ngOnChanges(changes: SimpleChanges): void {
    const { color, size } = changes;
    this.computedClasses = ABtnComponent.initClasses({
      color: color.currentValue,
      size: size.currentValue,
    });
  }

  static initClasses({ color, size }: Record<string, string>): Record<string, boolean> {
    return {
      [`btn-color--${color}`]: true,
      [`btn-size--${size}`]: true,
    };
  }

  handleClick(event: Event) {
    this.clickBtn.emit(event);
  }
}
