import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { MenuModule } from '@features/menu';
import { TooltipModule } from '@features/tooltip';
import { TodoSchedulerMenuComponent } from './todo-scheduler-menu.component';

@NgModule({
  declarations: [TodoSchedulerMenuComponent],
  imports: [CommonModule, AngularSvgIconModule, MenuModule, TooltipModule],
  exports: [TodoSchedulerMenuComponent],
})
export class TodoSchedulerMenuModule {}
