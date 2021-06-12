import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { TodoView } from '@shared/models';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoActionsMenuComponent } from '../todo-actions-menu';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit, AfterViewInit {
  @Input() todo: TodoView;
  @Input() todoCount: number;
  @Input() overdueFn: (Date) => boolean = (d) => true;
  @Input() showTerm: boolean;
  @Input() termFormatFn: (TodoView) => string;
  @Input() isOverdue: boolean;
  termFormat: string;

  now = new Date();
  menu = TodoActionsMenuComponent;
  overdue$: Observable<boolean>;

  constructor() {}

  ngOnInit() {
    this.termFormat = this.termFormatFn(this.todo);
    this.overdue$ = interval(60000).pipe(map(() => this.overdueFn(new Date())));
  }

  ngAfterViewInit() {}
}
