import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListComponent } from './todo-list.component';
import { CreateTaskModule } from '../create-task/create-task.module';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, CreateTaskModule],
  exports: [TodoListComponent],
})
export class TodoListModule {}
