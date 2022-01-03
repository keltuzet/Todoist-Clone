import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLetDirectiveModule } from 'ngx-let-directive';

import { LabelRoutingModule } from './label-routing.module';
import { LabelComponent } from './label.component';
import { TodoListModule, TodoModule } from '@shared/components';
import { ButtonModule } from '@features/button/button.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuModule } from '@features/menu';

@NgModule({
  declarations: [LabelComponent],
  imports: [
    CommonModule,
    LabelRoutingModule,
    NgxLetDirectiveModule,
    TodoModule,
    ButtonModule,
    AngularSvgIconModule,
    TodoListModule,
    MenuModule,
  ],
})
export class LabelModule {}
