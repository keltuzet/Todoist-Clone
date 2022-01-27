import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateTaskDetailsComponent } from './update-task-details.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TabsModule } from '@features/tabs/tabs.module';
import { RadioButtonModule } from '@features/radio-button';
import { ButtonModule } from '@features/button/button.module';
import { NgxLetDirectiveModule } from 'ngx-let-directive';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  declarations: [UpdateTaskDetailsComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    TabsModule,
    RadioButtonModule,
    ButtonModule,
    NgxLetDirectiveModule,
    CommentsModule,
  ],
  exports: [UpdateTaskDetailsComponent],
})
export class UpdateTaskDetailsModule {}
