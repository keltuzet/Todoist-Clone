import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingRoutingModule } from './upcoming-routing.module';
import { UpcomingComponent } from './upcoming.component';
import { UpcomingCalendarComponent, DateTasksSectionComponent } from './components';
import { NextPrevButtonModule, OverdueTodoListModule } from '@shared/components';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CapitalizeModule } from '@shared/pipes';
import { CreateTaskModule } from '@shared/components/create-task/create-task.module';
import { DateSchedulerModule } from '@shared/components/date-scheduler/date-scheduler.module';

@NgModule({
  declarations: [UpcomingComponent, UpcomingCalendarComponent, DateTasksSectionComponent],
  imports: [
    CommonModule,
    UpcomingRoutingModule,
    NextPrevButtonModule,
    AngularSvgIconModule,
    CapitalizeModule,
    OverdueTodoListModule,
    CreateTaskModule,
    DateSchedulerModule, // remove me after implementation
  ],
})
export class UpcomingModule {}
