import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { setNextWeek, setToday, setTomorrow, setWeekend } from '@shared/utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ScheduleHolderItem, ScheduleHolderItemType } from './schedule-holder-item.model';
import { SCHEDULE_HOLDER_LIST } from './schedule-holder-list.const';

@Component({
  selector: 'app-todo-schedule-holder',
  templateUrl: './todo-schedule-holder.component.html',
  styleUrls: ['./todo-schedule-holder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoScheduleHolderComponent implements OnInit {
  date$ = new BehaviorSubject<Date>(null);
  list$: Observable<ScheduleHolderItem[]>;
  now = new Date();
  currDay = this.now.getDate();

  @Output() dateChange = new EventEmitter<Date | null>();

  @Input('date') set date(val: Date) {
    this.date$.next(val);
  }

  constructor() {}

  ngOnInit(): void {
    this.list$ = this.date$.pipe(
      map((date) => SCHEDULE_HOLDER_LIST.slice(this.now.getDate() > date.getDate() ? 0 : 1)),
    );
  }

  handleClick(type: ScheduleHolderItemType) {}

  changeDate(type: ScheduleHolderItemType) {
    switch (type) {
      case 'today':
        return this.dateChange.emit(setToday(new Date(this.date$.value.getTime()), this.now));
      case 'tomorrow':
        return this.dateChange.emit(setTomorrow(new Date(this.date$.value.getTime()), this.now));
      case 'weekends':
        return this.dateChange.emit(setWeekend(new Date(this.date$.value.getTime()), this.now));
      case 'nextWeek':
        return this.dateChange.emit(setNextWeek(new Date(this.date$.value.getTime()), this.now));
      case 'noTimeLimit':
        return this.dateChange.emit(null);
      case 'more':
        return;
    }
  }
}
