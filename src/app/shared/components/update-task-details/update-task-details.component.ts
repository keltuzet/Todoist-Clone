import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { DIALOG_DATA } from '@features/dialog/dialog-config';
import { DialogRef } from '@features/dialog/dialog-ref';
import { TodosQuery, TodosService } from '@stores/todos';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 't-update-task-details',
  templateUrl: './update-task-details.component.html',
  styleUrls: ['./update-task-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateTaskDetailsComponent implements OnInit {
  todo$ = this.todosQuery.selectTodo(this.id);
  constructor(
    @Inject(DIALOG_DATA) private id: number,
    private todosQuery: TodosQuery,
    private dialogRef: DialogRef,
    private todosService: TodosService,
  ) {}

  ngOnInit(): void {}

  addAlpha(color: string, opacity: number): string {
    // coerce values so ti is between 0 and 1.
    const colorOpacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + colorOpacity.toString(16).toUpperCase();
  }

  close(): void {
    this.dialogRef.close();
  }

  postComment(text: string): void {
    this.todo$
      .pipe(
        take(1),
        switchMap(todo => this.todosService.postComment(text, todo.id)),
      )
      .subscribe();
  }
}
