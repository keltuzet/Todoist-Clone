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
import { SelectPriorityMenuModule } from '../select-priority-menu/select-priority-menu.module';
import { SelectTagsMenuModule } from '../select-tags-menu/select-tags-menu.module';
import { UpdateTaskDetailsComponent } from './update-task-details.component';

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
    SelectPriorityMenuModule,
    SelectTagsMenuModule,
    TooltipModule,
  ],
  exports: [UpdateTaskDetailsComponent],
})
export class UpdateTaskDetailsModule {}
