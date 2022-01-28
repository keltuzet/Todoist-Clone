import { Component, ChangeDetectionStrategy, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommentEditorComponent } from '../comment-editor/comment-editor.component';

@Component({
  selector: 't-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCommentComponent {
  @ViewChild(CommentEditorComponent, { static: true }) editor: CommentEditorComponent;
  @Output('comment') commentEvent = new EventEmitter<string>();
  readonly placeholder = 'Написать комментарий';

  comment(): void {
    const text = this.editor.text;
    if (!text.trim()) return;
    this.commentEvent.emit(text);
    this.editor.clearTextboxInner();
  }
}
