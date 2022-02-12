import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDeadlineMenuComponent } from './t-todo-deadline-menu.component';
import { TodoScheduleHolderModule } from '../todo-schedule-holder/todo-schedule-holder.module';
import { TTodoScheduleHolderDeadlineModule } from './t-todo-schedule-holder-deadline/t-todo-schedule-holder-deadline.module';

@NgModule({
  declarations: [TodoDeadlineMenuComponent],
  imports: [CommonModule, TodoScheduleHolderModule, TTodoScheduleHolderDeadlineModule],
  exports: [TodoDeadlineMenuComponent],
})
export class TodoDeadlineMenuModule {}
