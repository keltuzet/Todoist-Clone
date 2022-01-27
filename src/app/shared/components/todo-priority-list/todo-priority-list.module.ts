import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { TooltipModule } from 'todoist-tooltip';
import { TodoPriorityListComponent } from './todo-priority-list.component';

@NgModule({
  declarations: [TodoPriorityListComponent],
  imports: [CommonModule, AngularSvgIconModule, TooltipModule],
  exports: [TodoPriorityListComponent],
})
export class TodoPriorityListModule {}
