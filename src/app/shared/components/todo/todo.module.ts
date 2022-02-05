import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TooltipModule } from 'todoist-tooltip';
import { MenuModule } from 'todoist-menu';

import { RadioButtonModule } from '@features/radio-button';
import { CapitalizeModule, TimePassedModule } from '@shared/pipes';
import { TodoComponent } from './todo.component';
import { TodoActionsMenuModule } from '../todo-actions-menu';
import { UpdateTaskDetailsModule } from '../update-task-details/update-task-details.module';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    RadioButtonModule,
    TooltipModule,
    TimePassedModule,
    CapitalizeModule,
    TodoActionsMenuModule,
    MenuModule,
    UpdateTaskDetailsModule,
  ],
  exports: [TodoComponent],
})
export class TodoModule {}
