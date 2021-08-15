import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { TodoView } from '@shared/models';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoActionsMenuComponent } from '../todo-actions-menu';
import { TodoSchedulerMenuComponent } from '../todo-scheduler-menu';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit, AfterViewInit {
  @Input() todo: TodoView;
  @Input() todoCount: number;
  @Input() showTerm: boolean;
  @Input() termFormatFn: (TodoView) => string;
  @Input() isOverdue: boolean;
  termFormat: string;

  now = new Date();
  menu = TodoActionsMenuComponent;
  schedulerMenu = TodoSchedulerMenuComponent;
  overdue$: Observable<boolean>;
  isFormModel = false;
  @Input() overdueFn: (Date) => boolean = (d) => true;

  constructor() {}

  ngOnInit(): void {
    this.termFormat = this.termFormatFn(this.todo);
    this.overdue$ = interval(60000).pipe(map(() => this.overdueFn(new Date())));
  }

  ngAfterViewInit(): void {}

  edit(): void {
    this.isFormModel = true;
  }

  cancelEditing(): void {
    this.isFormModel = false;
  }
}
