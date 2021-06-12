import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoView } from '@shared/models';
import { setNextWeek, setToday, setTomorrow, setWeekend } from '@shared/utils';
import { TodosService } from '@stores/todos';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ScheduleHolderItem, ScheduleHolderItemType } from './schedule-holder-item.model';
import { getScheduleHolderList, SCHEDULE_HOLDER_LIST } from './schedule-holder-list.const';

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

  @Output() scheduleChange = new EventEmitter<Date | null>();

  @Input('date') set date(val: Date) {
    this.date$.next(val);
  }
  @Input() todo: TodoView;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.list$ = this.date$.pipe(
      map((date) => getScheduleHolderList(date, this.now)),
    );
  }

  handleClick(type: ScheduleHolderItemType) {}

  setSchedule(type: ScheduleHolderItemType) {
    if (!this.date$.value) return;
    switch (type) {
      case 'today':
        return this.scheduleChange.emit(setToday(new Date(this.date$.value.getTime()), this.now));
      case 'tomorrow':
        return this.scheduleChange.emit(setTomorrow(new Date(this.date$.value.getTime()), this.now));
      case 'weekends':
        return this.scheduleChange.emit(setWeekend(new Date(this.date$.value.getTime()), this.now));
      case 'nextWeek':
        return this.scheduleChange.emit(setNextWeek(new Date(this.date$.value.getTime()), this.now));
      case 'noTimeLimit':
        const noLimitDate = new Date(this.date$.value.getTime());
        noLimitDate.setFullYear(99999);
        return this.scheduleChange.emit(noLimitDate);
      case 'more':
        return;
    }
  }
}
