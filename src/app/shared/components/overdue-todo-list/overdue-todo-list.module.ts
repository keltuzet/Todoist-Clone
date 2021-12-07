import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverdueTodoListComponent } from './overdue-todo-list.component';
import { TodoModule } from '../todo';

@NgModule({
  declarations: [OverdueTodoListComponent],
  imports: [CommonModule, TodoModule],
  exports: [OverdueTodoListComponent],
})
export class OverdueTodoListModule {}
