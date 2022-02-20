import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '@stores/todos';
import { setNextWeek, setToday, setTomorrow, setWeekend } from '@shared/utils';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ScheduleHolderItem, ScheduleHolderItemType } from './schedule-holder-item.model';
import { getScheduleHolderList } from './schedule-holder-list.const';

@Component({
  selector: 't-todo-schedule-holder',
  templateUrl: './todo-schedule-holder.component.html',
  styleUrls: ['./todo-schedule-holder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoScheduleHolderComponent implements OnInit {
  date$ = new BehaviorSubject<moment.Moment>(null);
  list$: Observable<ScheduleHolderItem[]>;
  now = new Date();
  nowMoment = moment();
  currDay = this.now.getDate();

  @Output() scheduleChange = new EventEmitter<Date | null>();

  @Input() isColView = true;
  @Input('date') set date(val: string) {
    this.date$.next(moment(val));
  }
  @Input() todo: Todo;

  ngOnInit(): void {
    this.list$ = this.date$.pipe(map(date => getScheduleHolderList(date.toDate(), this.now)));
  }

  handleClick(type: ScheduleHolderItemType): void {}

  setSchedule(type: ScheduleHolderItemType): void {
    if (!this.date$.value) return;
    const date = this.date$.value;
    switch (type) {
      case 'today':
        return this.scheduleChange.emit(setToday(date, this.nowMoment).toDate());
      case 'tomorrow':
        return this.scheduleChange.emit(setTomorrow(date, this.nowMoment).toDate());
      case 'weekends':
        return this.scheduleChange.emit(setWeekend(date, this.nowMoment).toDate());
      case 'nextWeek':
        return this.scheduleChange.emit(setNextWeek(date, this.nowMoment).toDate());
      case 'noTimeLimit':
        return this.scheduleChange.emit(date.toDate());
    }
  }
}
