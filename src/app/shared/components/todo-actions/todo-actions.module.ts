import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SelectPriorityButtonComponent } from './select-priority-button/select-priority-button.component';
import { SelectTagsButtonComponent } from './select-tags-button/select-tags-button.component';
import { PriorityActionsModule } from '../priority-actions';
import { TagActionsModule } from '../tag-actions';

@NgModule({
  declarations: [SelectPriorityButtonComponent, SelectTagsButtonComponent],
  imports: [CommonModule, TagActionsModule, PriorityActionsModule, AngularSvgIconModule],
  exports: [SelectPriorityButtonComponent, SelectTagsButtonComponent],
})
export class TodoActionsModule {}
