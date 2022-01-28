import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { EmojiMenuComponent } from '@shared/components/emoji-menu/emoji-menu.component';
import { DetailedComment } from '@shared/models';
import { TodosQuery, TodosService } from '@stores/todos';
import { switchMap, take, tap } from 'rxjs/operators';
import { CommentEditorComponent } from '../comment-editor/comment-editor.component';

@Component({
  selector: 't-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent {
  @ViewChild(CommentEditorComponent) editor: CommentEditorComponent;
  @Input() comment: DetailedComment;
  @Input() relatedTodoId: number;
  isEditMode = false;
  readonly emojiMenu = EmojiMenuComponent;

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

  edit(): void {
    this.isEditMode = true;
  }

  update(): void {
    this.todosQuery
      .selectEntity(this.relatedTodoId)
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
    this.todosQuery
      .selectEntity(this.relatedTodoId)
      .pipe(
        take(1),
        switchMap(todo => this.todosService.reactToComment(emoji, this.comment.id, todo.id)),
      )
      .subscribe();
  }
}
