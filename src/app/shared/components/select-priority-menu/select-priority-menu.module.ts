import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLetDirectiveModule } from 'ngx-let-directive';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { SelectPriorityMenuComponent } from './select-priority-menu.component';
import { PriorityFlagIconModule } from '@shared/directives';

@NgModule({
  declarations: [SelectPriorityMenuComponent],
  imports: [CommonModule, NgxLetDirectiveModule, PriorityFlagIconModule, AngularSvgIconModule],
  exports: [SelectPriorityMenuComponent],
})
export class SelectPriorityMenuModule {}
