import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { GreetingSnackbarModule } from '@shared/components/greeting-snackbar/greeting-snackbar.module';
import { ProjectNotFoundComponent } from './components';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonModule } from '@features/button/button.module';
import { ShowOnBreakpointModule } from '@shared/directives';
import { TooltipModule } from 'todoist-tooltip';
import { TabsModule } from '@features/tabs/tabs.module';
import { SwitchModule } from '@features/switch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectComponent, ProjectNotFoundComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    GreetingSnackbarModule,
    AngularSvgIconModule,
    ButtonModule,
    ShowOnBreakpointModule,
    TooltipModule,
    TabsModule,
    SwitchModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ProjectModule {}
