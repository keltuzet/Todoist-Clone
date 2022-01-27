import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Dialog } from '@features/dialog/dialog.service';

import { DetailedTodo, Todo } from '@shared/models';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoActionsMenuComponent } from '../todo-actions-menu';
import { UpdateTaskDetailsComponent } from '../update-task-details/update-task-details.component';

@Component({
  selector: 't-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  @Input() todo: DetailedTodo;
  @Input() todoCount: number;
  @Input() showTerm: boolean;
  @Input() termFormatFn: (Todo) => string;
  @Input() isOverdue: boolean;
  termFormat: string;

  now = new Date();
  menu = TodoActionsMenuComponent;
  overdue$: Observable<boolean>;

  @Input() overdueFn: (Date) => boolean = d => true;
  constructor(private dialog: Dialog) {}

  ngOnInit(): void {
    this.termFormat = this.termFormatFn(this.todo);
    this.overdue$ = interval(60000).pipe(map(() => this.overdueFn(new Date())));
  }

  comment(id: number): void {
    this.dialog.open(UpdateTaskDetailsComponent, {
      data: id,
      width: '100%',
      maxWidth: '650px',
      maxHeight: '960px',
      minHeight: '400px',
      hasBackdrop: false,
    });
  }
}
