import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Dialog } from '@features/dialog';
import { DetailedTodo, Todo } from '@shared/models';
import { TodoActionsMenuComponent } from '../todo-actions-menu';
import { TodoDeadlineMenuComponent } from '../t-todo-deadline-menu/t-todo-deadline-menu.component';
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

  readonly now = new Date();
  readonly todoActionsMenu = TodoActionsMenuComponent;
  readonly todoDeadline = TodoDeadlineMenuComponent;

  constructor(private dialog: Dialog) {}

  ngOnInit(): void {
    this.termFormat = this.termFormatFn(this.todo);
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
