import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDeadlineMenuComponent } from './t-todo-deadline-menu.component';
import { TodoScheduleHolderModule } from '../todo-schedule-holder/todo-schedule-holder.module';



@NgModule({
  declarations: [
    TodoDeadlineMenuComponent
  ],
  imports: [
    CommonModule, TodoScheduleHolderModule
  ],
  exports: [
    TodoDeadlineMenuComponent
  ]
})
export class TodoDeadlineMenuModule { }
