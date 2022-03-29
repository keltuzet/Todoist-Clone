import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';

import { DIALOG_DATA, DialogRef } from '@features/dialog/';
import { Priority } from '@stores/priorities';
import { TodosQuery, TodosService } from '@stores/todos';
import { SelectPriorityMenuComponent } from '../priority-actions';
import { SelectTagsMenuComponent } from '../tag-actions';
import { PostComment } from '../comments/post-comment.model';

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

  postComment(post: PostComment): void {
    this.todo$
      .pipe(
        take(1),
        switchMap(todo => this.todosService.postComment(post, todo.id)),
      )
      .subscribe();
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
