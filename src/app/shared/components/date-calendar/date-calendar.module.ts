import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateCalendarComponent } from './date-calendar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CapitalizeModule } from '@shared/pipes';

@NgModule({
  declarations: [DateCalendarComponent],
  imports: [CommonModule, AngularSvgIconModule, CapitalizeModule],
  exports: [DateCalendarComponent],
})
export class DateCalendarModule {}
