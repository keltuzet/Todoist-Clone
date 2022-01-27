import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DetailedComment } from '@shared/models';
import { TodosQuery, TodosService } from '@stores/todos';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 't-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent {
  @Input() comment: DetailedComment;
  @Input() relatedTodoId: number;

  constructor(private todosQuery: TodosQuery, private todosService: TodosService) {}

  remove(): void {
    this.todosQuery
      .selectEntity(this.relatedTodoId)
      .pipe(
        take(1),
        switchMap(todo => {
          return this.todosService.removeComment(this.comment.id, todo.id);
        }),
      )
      .subscribe();
  }
}
