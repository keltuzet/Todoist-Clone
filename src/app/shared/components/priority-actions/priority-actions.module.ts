import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgxLetDirectiveModule } from 'ngx-let-directive';
import { MenuModule } from 'todoist-menu';
import { TooltipModule } from 'todoist-tooltip';
import { PriorityFlagIconModule } from '@shared/directives';
import { ButtonModule } from '@features/button';
import { UpdatePriorityButtonComponent } from './update-priority-button/update-priority-button.component';
import { SelectPriorityMenuComponent } from './select-priority-menu/select-priority-menu.component';

@NgModule({
  declarations: [UpdatePriorityButtonComponent, SelectPriorityMenuComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    NgxLetDirectiveModule,
    MenuModule,
    PriorityFlagIconModule,
    ButtonModule,
    TooltipModule,
  ],
  exports: [UpdatePriorityButtonComponent, SelectPriorityMenuComponent],
})
export class PriorityActionsModule {}
