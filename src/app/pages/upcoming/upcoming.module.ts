import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingRoutingModule } from './upcoming-routing.module';
import { UpcomingComponent } from './upcoming.component';
import { UpcomingCalendarComponent } from './components';
import { NextPrevButtonModule } from '@shared/components';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CapitalizeModule } from '@shared/pipes';

@NgModule({
  declarations: [UpcomingComponent, UpcomingCalendarComponent],
  imports: [CommonModule, UpcomingRoutingModule, NextPrevButtonModule, AngularSvgIconModule, CapitalizeModule],
})
export class UpcomingModule {}
