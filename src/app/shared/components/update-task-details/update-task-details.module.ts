import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgxLetDirectiveModule } from 'ngx-let-directive';
import { MenuModule } from 'todoist-menu';
import { TooltipModule } from 'todoist-tooltip';

import { TabsModule } from '@features/tabs/tabs.module';
import { RadioButtonModule } from '@features/radio-button';
import { ButtonModule } from '@features/button/button.module';
import { HexTransparencyModule } from '@shared/pipes';
import { PriorityFlagIconModule } from '@shared/directives';
import { CommentsModule } from '../comments/comments.module';
import { UpdateTaskDetailsComponent } from './update-task-details.component';
import { PriorityActionsModule } from '../priority-actions';
import { TagActionsModule } from '../tag-actions';

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
    HexTransparencyModule,
    PriorityFlagIconModule,
    MenuModule,
    PriorityActionsModule,
    TagActionsModule,
    TooltipModule,
  ],
  exports: [UpdateTaskDetailsComponent],
})
export class UpdateTaskDetailsModule {}
