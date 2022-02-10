import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDeadlineComponent } from './todo-deadline.component';



@NgModule({
  declarations: [
    TodoDeadlineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoDeadlineComponent
  ]
})
export class TodoDeadlineModule { }
