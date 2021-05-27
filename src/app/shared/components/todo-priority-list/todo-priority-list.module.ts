import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPriorityListComponent } from './todo-priority-list.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TooltipModule } from '@features/tooltip';

@NgModule({
  declarations: [TodoPriorityListComponent],
  imports: [CommonModule, AngularSvgIconModule, TooltipModule],
  exports: [TodoPriorityListComponent],
})
export class TodoPriorityListModule {}
