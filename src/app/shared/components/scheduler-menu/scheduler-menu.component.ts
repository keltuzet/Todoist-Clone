import { Component, OnInit, ChangeDetectionStrategy, HostBinding, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo, TodosQuery } from '@stores/todos';
import * as moment from 'moment';
import { BehaviorSubject, map, merge, Subject, switchMap } from 'rxjs';
import { Observable } from 'rxjs';
import { MenuRef, MENU_DATA } from 'todoist-menu';
import { SetTimeMenuComponent } from './set-time-menu/set-time-menu.component';

@Component({
  selector: 't-scheduler-menu',
  templateUrl: './scheduler-menu.component.html',
  styleUrls: ['./scheduler-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SchedulerMenuComponent implements OnInit {
  @HostBinding('class.menu-list') readonly menuListCssClass = true;
  readonly dateInput = new FormControl();
  readonly setTimeMenu = SetTimeMenuComponent;
  isSchedulerDateValid$: Observable<boolean>;
  schedulerDatePreview$: Observable<string>;
  forceShowDatePreview$ = new Subject<boolean>();
  showDatePreview$ = new BehaviorSubject<boolean>(false);
  schedulerDateTodosTitle$: Observable<string>;
  private schedulerDate$ = new BehaviorSubject<moment.Moment>(null);
  private noTodosTitle = 'Нет задач';
  private currentDate: moment.Moment;
  get timeLabel(): string {
    if (!this.currentDate) return 'Добавить';
  }

  constructor(
    private todosQuery: TodosQuery,
    private menuRef: MenuRef,
    @Inject(MENU_DATA) private todo: Todo,
  ) {
    this.currentDate = todo ? moment(todo.endDate) : null;
  }

  ngOnInit(): void {
    this.initInputDate();
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    const schedulerDate = this.schedulerDate$.value;
    if (!schedulerDate.isValid()) {
      this.forceShowDatePreview$.next(true);
      return;
    }

    this.menuRef.close(schedulerDate.toDate());
  }

  private initInputDate(): void {
    this.dateInput.valueChanges.pipe(map((dateString: string) => moment(dateString))).subscribe(this.schedulerDate$);

    merge(
      this.schedulerDate$.pipe(map(date => Boolean(date?.isValid()))),
      this.forceShowDatePreview$.asObservable(),
    ).subscribe(display => {
      this.showDatePreview$.next(display);
    });

    this.schedulerDatePreview$ = this.schedulerDate$.pipe(
      map(date => {
        return date.isValid() ? date.format('dd D MMM YYYY') : 'Нет результатов';
      }),
    );

    this.schedulerDateTodosTitle$ = this.schedulerDate$.pipe(
      switchMap(date => this.todosQuery.selectByDate(date)),
      map(todos => this.getTodosCountTitle(todos)),
    );
  }

  private getTodosCountTitle(todos: Todo[]): string {
    if (!todos.length) return this.noTodosTitle;
    if (todos.length === 1) return `${todos.length} задача`;
    return `${todos.length} задачи`;
  }

  parseDate(dateString: string, format: string): moment.Moment | null {
    const date = moment(dateString, format);
    return date.isValid() ? date : null;
  }

  parseDate2(dateString: string): any {
    const [first, second, third] = dateString.split(/(\s||-\\\/)/);

    let day: number;
    let month: number;
    let invalid = false;

    const isFirstPartNum = this.isNumeric(first);
    const isFirstPartMoth = !isFirstPartNum || this.isMonthName(first);
    if (isFirstPartNum) day = +first;
    else if (isFirstPartMoth) month = moment().month(first).get('month');
    else invalid = true;

    // const isSecondPartNum = this.isNumeric(first);
    // const isFirstPartMoth = !isFirstPartNum || this.isMonthName(first);
    // if (isFirstPartNum) day = +first;
    // else if (isFirstPartMoth) month = moment().month(first).get('month');
    // else invalid = true;

    // if (isFirstPartNum)
    // mark as number
    // or this.isMonthName(first)
  }

  isNumeric(num: string): boolean {
    return !num.trim() && !isNaN(+num);
  }

  isMonthName(name: string): boolean {
    const monthShortNames = moment.monthsShort();
    const monthsFullNames = moment.months();
    return monthShortNames.includes(name) || monthsFullNames.includes(name);
  }

  setTime(time: string): void {
    console.log(time);
  }
}
