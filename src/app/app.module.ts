import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ABtnComponent } from './a-btn/a-btn.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ABtnComponent,
    ListItemComponent,
    TodoListComponent,
    AppBarComponent,
    CreateTodoComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
