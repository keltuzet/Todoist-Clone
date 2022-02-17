import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';

import { DIALOG_DATA, DialogRef } from '@features/dialog/';
import { Priority } from '@stores/priorities';
import { TodosQuery, TodosService } from '@stores/todos';
import { SelectTagsMenuComponent } from '../select-tags-menu';
import { SelectPriorityMenuComponent } from '../priority-actions';

@Component({
  selector: 't-update-task-details',
  templateUrl: './update-task-details.component.html',
  styleUrls: ['./update-task-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateTaskDetailsComponent {
  readonly todo$ = this.todosQuery.selectTodo(this.id);
  readonly tagOpacity = 0.2;
  readonly selectPriorityMenu = SelectPriorityMenuComponent;
  readonly selectTagsMenu = SelectTagsMenuComponent;

  constructor(
    @Inject(DIALOG_DATA) private id: number,
    private todosQuery: TodosQuery,
    private dialogRef: DialogRef,
    private todosService: TodosService,
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  postComment(text: string): void {
    this.todo$
      .pipe(
        take(1),
        switchMap(todo => this.todosService.postComment(text, todo.id)),
      )
      .subscribe(v => console.log(v));
  }

  updatePriority(priority: Priority): void {
    if (!priority) return;
    this.todo$
      .pipe(
        take(1),
        switchMap(todo => this.todosService.updateTodo(todo.id, { priorityId: priority.id })),
      )
      .subscribe();
  }

  updateTags(arg: any): void {}
}
