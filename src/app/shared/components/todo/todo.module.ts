import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TodoComponent } from './todo.component';
import { RadioButtonModule } from '@features/radio-button';
import { TooltipModule } from '@features/tooltip';
import { CapitalizeModule, TimePassedModule } from '@shared/pipes';
import { TodoActionsMenuModule } from '../todo-actions-menu';
import { MenuModule } from '@features/menu';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, AngularSvgIconModule, RadioButtonModule, TooltipModule, TimePassedModule, CapitalizeModule, TodoActionsMenuModule, MenuModule],
  exports: [TodoComponent],
})
export class TodoModule {}
