import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDeadlineComponent } from './todo-deadline.component';
import { TodoScheduleHolderModule } from '../todo-schedule-holder/todo-schedule-holder.module';



@NgModule({
  declarations: [
    TodoDeadlineComponent
  ],
  imports: [
    CommonModule, TodoScheduleHolderModule
  ],
  exports: [
    TodoDeadlineComponent
  ]
})
export class TodoDeadlineModule { }
