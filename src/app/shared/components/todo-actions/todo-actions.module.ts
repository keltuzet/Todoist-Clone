import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPriorityButtonComponent } from './select-priority-button/select-priority-button.component';
import { SelectTagsButtonComponent } from './select-tags-button/select-tags-button.component';
import { SelectTagsMenuModule } from '../select-tags-menu/select-tags-menu.module';
import { SelectPriorityMenuModule } from '../select-priority-menu/select-priority-menu.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [SelectPriorityButtonComponent, SelectTagsButtonComponent],
  imports: [CommonModule, SelectTagsMenuModule, SelectPriorityMenuModule, AngularSvgIconModule],
  exports: [SelectPriorityButtonComponent, SelectTagsButtonComponent],
})
export class TodoActionsModule {}
