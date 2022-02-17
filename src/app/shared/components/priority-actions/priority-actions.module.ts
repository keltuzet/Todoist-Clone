import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuModule } from 'todoist-menu';
import { PriorityFlagIconModule } from '@shared/directives';
import { UpdatePriorityComponent } from './update-priority/update-priority.component';
import { SelectPriorityMenuComponent } from './select-priority-menu/select-priority-menu.component';

@NgModule({
  declarations: [UpdatePriorityComponent, SelectPriorityMenuComponent],
  imports: [CommonModule, AngularSvgIconModule, MenuModule, PriorityFlagIconModule],
  exports: [UpdatePriorityComponent, SelectPriorityMenuComponent],
})
export class PriorityActionsModule {}
