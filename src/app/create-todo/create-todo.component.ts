import {
  Component, EventEmitter, Output,
} from '@angular/core';

import { NewTodo } from '../../types/TodoItem';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent {
  @Output() addTodo = new EventEmitter<NewTodo>();

  todoValue: string = '';

  // handleInput(event: Event & { target: HTMLInputElement }) {
  handleBlur(event: any) {
    this.todoValue = event.target.value;
  }

  createNewTodo() {
    if (!this.todoValue) {
      return;
    }

    const newTodo: NewTodo = {
      title: this.todoValue,
      completed: false,
      createdAt: new Date().getTime(),
    };

    this.addTodo.emit(newTodo);

    this.todoValue = '';
  }
}
