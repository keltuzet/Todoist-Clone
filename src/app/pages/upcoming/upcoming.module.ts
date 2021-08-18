import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingRoutingModule } from './upcoming-routing.module';
import { UpcomingComponent } from './upcoming.component';
import { UpcomingCalendarComponent, DateTasksSectionComponent } from './components';
import { NextPrevButtonModule, OverdueTodoListModule } from '@shared/components';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CapitalizeModule } from '@shared/pipes';

@NgModule({
  declarations: [UpcomingComponent, UpcomingCalendarComponent, DateTasksSectionComponent],
  imports: [CommonModule, UpcomingRoutingModule, NextPrevButtonModule, AngularSvgIconModule, CapitalizeModule, OverdueTodoListModule],
})
export class UpcomingModule {}
