import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Todo } from '@shared/models';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoActionsMenuComponent } from '../todo-actions-menu';

@Component({
  selector: 't-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Input() todoCount: number;
  @Input() showTerm: boolean;
  @Input() termFormatFn: (Todo) => string;
  @Input() isOverdue: boolean;
  termFormat: string;

  now = new Date();
  menu = TodoActionsMenuComponent;
  overdue$: Observable<boolean>;

  @Input() overdueFn: (Date) => boolean = (d) => true;
  constructor() {}

  ngOnInit(): void {
    this.termFormat = this.termFormatFn(this.todo);
    this.overdue$ = interval(60000).pipe(map(() => this.overdueFn(new Date())));
  }
}
