import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 't-upcoming-calendar',
  templateUrl: './upcoming-calendar.component.html',
  styleUrls: ['./upcoming-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingCalendarComponent implements OnInit {
  today = new Date();
  date = new Date();
  monthDay = this.date.getDate();
  weekDay = (this.monthDay || 7) - 1;
  stardDate: Date;
  weekList = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  week: Date[] = [];
  selected: Date;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.calcWeek();
  }

  calcWeek(): void {
    const startMonthDay = this.date.getDate() - this.weekDay + 1;
    for (let monthDay = startMonthDay, index = 0; monthDay < startMonthDay + 7; index++, monthDay++) {
      const newDate = new Date(this.date);
      newDate.setDate(monthDay);
      this.week[index] = newDate;
    }
  }

  changeWeek(event: 'next' | 'prev'): void {
    const diffDay = this.date.getDate() + (event === 'next' ? 7 : -7);
    this.date.setDate(diffDay);
    this.date = new Date(this.date);
    this.calcWeek();
  }

  selectDate(date: Date): void {
    this.selected = date;
    console.log(this.selected);
  }

  moveToToday(): void {
    this.date = new Date(this.today);
    this.calcWeek();
  }
}
