import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerMenuComponent } from './scheduler-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SetTimeMenuComponent } from './set-time-menu/set-time-menu.component';
import { MenuModule } from 'todoist-menu';

@NgModule({
  declarations: [SchedulerMenuComponent, SetTimeMenuComponent],
  imports: [CommonModule, ReactiveFormsModule, AngularSvgIconModule, MenuModule],
  exports: [SchedulerMenuComponent, SetTimeMenuComponent],
})
export class SchedulerMenuModule {}
