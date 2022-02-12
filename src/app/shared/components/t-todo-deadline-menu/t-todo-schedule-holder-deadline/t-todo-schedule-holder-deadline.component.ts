import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ScheduleHolderItem, ScheduleHolderItemType } from '@shared/components/todo-schedule-holder/schedule-holder-item.model';
import { getScheduleHolderList } from '@shared/components/todo-schedule-holder/schedule-holder-list.const';
import { Todo } from '@shared/models';
import { setNextWeek, setToday, setTomorrow, setWeekend } from '@shared/utils';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 't-t-todo-schedule-holder-deadline',
  templateUrl: './t-todo-schedule-holder-deadline.component.html',
  styleUrls: ['./t-todo-schedule-holder-deadline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TTodoScheduleHolderDeadlineComponent implements OnInit {
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
      case 'more':
        return;
    }
  }
}
