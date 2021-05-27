import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { RadioButtonModule } from '@features/radio-button';
import { TooltipModule } from '@features/tooltip';
import { MenuModule } from '@features/menu';
import { CapitalizeModule, TimePassedModule } from '@shared/pipes';
import { TodoComponent } from './todo.component';
import { TodoActionsMenuModule } from '../todo-actions-menu';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, AngularSvgIconModule, RadioButtonModule, TooltipModule, TimePassedModule, CapitalizeModule, TodoActionsMenuModule, MenuModule],
  exports: [TodoComponent],
})
export class TodoModule {}
