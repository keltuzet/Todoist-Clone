import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { MenuModule } from 'todoist-menu';
import { TooltipModule } from 'todoist-tooltip';
import { TodoPriorityListModule } from '../todo-priority-list';
import { TodoActionsMenuComponent } from './todo-actions-menu.component';
import { TodoScheduleHolderModule } from '../todo-schedule-holder';

@NgModule({
  declarations: [TodoActionsMenuComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    MenuModule,
    TooltipModule,
    TodoPriorityListModule,
    TodoScheduleHolderModule,
  ],
  exports: [TodoActionsMenuComponent],
})
export class TodoActionsMenuModule {}
