import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ABtnComponent } from './a-btn/a-btn.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppBarComponent } from './app-bar/app-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ABtnComponent,
    ListItemComponent,
    TodoListComponent,
    AppBarComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
