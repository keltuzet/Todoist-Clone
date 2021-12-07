import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateSchedulerComponent } from './date-scheduler.component';
import { TodoScheduleHolderModule } from '../todo-schedule-holder';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DateCalendarModule } from '../date-calendar/date-calendar.module';
import { CapitalizeModule } from '@shared/pipes';
import { DateSchedulerInputComponent } from './date-scheduler-input/date-scheduler-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DateSchedulerComponent, DateSchedulerInputComponent],
  imports: [CommonModule, TodoScheduleHolderModule, AngularSvgIconModule, DateCalendarModule, ReactiveFormsModule],
  exports: [DateSchedulerComponent],
})
export class DateSchedulerModule {}
