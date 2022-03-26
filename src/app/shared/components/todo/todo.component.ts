import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Dialog } from '@features/dialog';
import { DetailedTodo, TodosService } from '@stores/todos';
import { TodoActionsMenuComponent } from '../todo-actions-menu';
import { TodoDeadlineMenuComponent } from '../t-todo-deadline-menu/t-todo-deadline-menu.component';
import { UpdateTaskDetailsComponent } from '../update-task-details/update-task-details.component';
import { SchedulerMenuComponent } from '../scheduler-menu/scheduler-menu.component';

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
  readonly schedulerMenu = SchedulerMenuComponent;

  constructor(private dialog: Dialog, private todosService: TodosService) {}

  ngOnInit(): void {
    this.termFormat = this.termFormatFn(this.todo);
  }

  openComments(): void {
    this.dialog.open(UpdateTaskDetailsComponent, {
      data: this.todo.id,
      width: '100%',
      maxWidth: '650px',
      maxHeight: '960px',
      minHeight: '400px',
      hasBackdrop: false,
    });
  }

  schedule(date: Date): void {
    this.todosService.updateTodo(this.todo.id, {
      endDate: date.toJSON(),
    });
  }
}
