import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 't-date-calendar',
  templateUrl: './date-calendar.component.html',
  styleUrls: ['./date-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateCalendarComponent implements OnInit {
  date = new Date();
  weekDayLabels = moment.weekdaysShort();
  months: object[];
  readonly moment = moment();

  constructor() { }

  ngOnInit(): void {
    this.setMonths();
  }

  setMonths(): void {
    let curDate = moment();
    this.months = [];
    for (let i = 0; i < 5; i++) {
      this.months[i] = {
        isCurrent: i === 0,
        days: this.getDays(curDate),
        date: curDate,
        month: curDate.month(),
        monthName: curDate.format('MMMM'),
      };
      curDate = curDate.clone().add(1, 'month').startOf('month');
    }
  }

  getDays(date: moment.Moment): number[] {
    date = date.clone();
    const beginOfWeek: number = date.month() === moment().month() ? date.startOf('week').date() : 1;
    const endOfMonth: number = date.endOf('month').date();
    const days = [];
    for (let i = beginOfWeek; i <= endOfMonth; i++) {
      days.push(i);
    }

    return days;
  }
}
