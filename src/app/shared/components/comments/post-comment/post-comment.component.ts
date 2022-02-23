import { Component, ChangeDetectionStrategy, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Dialog } from '@features/dialog';
import { CommentEditorComponent } from '../comment-editor/comment-editor.component';

enum Display {
  Editor = 'editor',
  AudioRecorder = 'audioRecorder',
  AttachBox = 'attachBox',
}

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
  state: Display = Display.Editor;
  readonly statesMap = Display;

  constructor(private dialog: Dialog) {}

  comment(): void {
    const text = this.editor.text;
    if (!text.trim()) return;
    this.commentEvent.emit(text);
    this.editor.clearTextboxInner();
  }

  recordAudio(): void {
    this.state = Display.AudioRecorder;
  }

  handleAudioRecorderClose(event?: Blob): void {
    this.state = Display.Editor;
  }

  attach(): void {
    console.log('Not implemented!');
  }
}
