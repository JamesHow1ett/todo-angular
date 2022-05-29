import {
  Component, EventEmitter, Input, OnChanges, Output, SimpleChanges,
} from '@angular/core';

type ButtonColor = 'primary' | 'black' | 'silver' | 'white' | 'red';
type ButtonSize = 'sm' | 'md' | 'lg';
@Component({
  selector: 'app-a-btn',
  templateUrl: './a-btn.component.html',
  styleUrls: ['./a-btn.component.scss'],
})
export class ABtnComponent implements OnChanges {
  @Input() color: ButtonColor = 'primary';

  @Input() size: ButtonSize = 'md';

  @Output() clickBtn = new EventEmitter<Event>();

  computedClasses: Record<string, boolean> = {};

  ngOnChanges(changes: SimpleChanges): void {
    const { color, size } = changes;
    this.computedClasses = ABtnComponent.getClasses({
      color: color.currentValue,
      size: size.currentValue,
    });
  }

  static getClasses = ({ color, size }: Record<string, string>): Record<string, boolean> => ({
    [`btn-color--${color}`]: true,
    [`btn-size--${size}`]: true,
  });

  handleClick(event: Event) {
    this.clickBtn.emit(event);
  }
}
