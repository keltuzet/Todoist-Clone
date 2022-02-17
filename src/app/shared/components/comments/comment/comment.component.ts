import { Component, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

import { Dialog } from '@features/dialog';
import { TodosQuery, TodosService } from '@stores/todos';
import { EmojiMenuComponent, ConfirmRemoveDialogComponent } from '@shared/components';
import { Todo } from '@stores/todos';
import { CommentsService, DetailedComment } from '@stores/comments';
import { isNil } from '@shared/utils';
import { CommentEditorComponent } from '../comment-editor/comment-editor.component';

@Component({
  selector: 't-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent {
  readonly emojiMenu = EmojiMenuComponent;
  todo$: Observable<Todo>;
  isEditMode = false;

  @ViewChild(CommentEditorComponent) editor: CommentEditorComponent;
  @Input() comment: DetailedComment;
  @Input() set relatedTodoId(id: number) {
    if (isNil(id)) return;
    this.todo$ = this.todosQuery.selectEntity(id);
  }

  constructor(
    private todosQuery: TodosQuery,
    private todosService: TodosService,
    private commentsService: CommentsService,
    private dialog: Dialog,
  ) {}

  remove(): void {
    this.dialog
      .open<ConfirmRemoveDialogComponent, null, boolean>(ConfirmRemoveDialogComponent)
      .afterClosed()
      .subscribe(confirm => {
        if (!confirm) return;

        this.todo$
          .pipe(
            take(1),
            switchMap(todo => this.todosService.removeComment(this.comment.id, todo.id)),
          )
          .subscribe();
      });
  }

  edit(): void {
    this.isEditMode = true;
  }

  update(): void {
    this.todo$
      .pipe(
        take(1),
        switchMap(todo => this.todosService.editComment(this.editor.text, this.comment.id, todo.id)),
      )
      .subscribe();
    this.isEditMode = false;
  }

  cancel(): void {
    this.isEditMode = false;
  }

  react(emoji: string): void {
    if (!emoji) return;

    this.todo$
      .pipe(
        take(1),
        switchMap(todo => this.commentsService.reactToComment(emoji, this.comment.id)),
      )
      .subscribe();
  }
}
