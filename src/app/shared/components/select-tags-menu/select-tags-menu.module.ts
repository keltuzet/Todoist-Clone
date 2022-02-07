import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { CheckboxModule } from '../checkbox/checkbox.module';
import { SelectTagsMenuComponent } from './select-tags-menu.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectTagsMenuComponent],
  imports: [CommonModule, AngularSvgIconModule, CheckboxModule, ReactiveFormsModule],
  exports: [SelectTagsMenuComponent],
})
export class SelectTagsMenuModule {}
