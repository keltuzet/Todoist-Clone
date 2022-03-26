import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TooltipModule } from 'todoist-tooltip';

import { ButtonModule } from '@features/button';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ProjectNotFoundComponent, TodoBoardCardComponent } from './components';
import { RadioButtonModule } from '@features/radio-button';

@NgModule({
  declarations: [ProjectComponent, ProjectNotFoundComponent, TodoBoardCardComponent],
  imports: [CommonModule, ProjectRoutingModule, AngularSvgIconModule, ButtonModule, TooltipModule, RadioButtonModule],
})
export class ProjectModule {}
