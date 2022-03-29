import { Component, ChangeDetectionStrategy, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Dialog } from '@features/dialog';
import { CommentEditorComponent } from '../comment-editor/comment-editor.component';
import { PostComment } from '../post-comment.model';

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
  @Output('comment') commentEvent = new EventEmitter<PostComment>();
  readonly placeholder = 'Написать комментарий';
  state: Display = Display.Editor;
  readonly statesMap = Display;
  private audioURL: string;

  constructor(private dialog: Dialog) {}

  comment(): void {
    const text = this.editor.text;
    if (!text.trim() && !this.audioURL) return;
    this.commentEvent.emit({ text, audioURL: this.audioURL });
    this.editor.clearTextboxInner();
  }

  recordAudio(): void {
    this.state = Display.AudioRecorder;
  }

  async handleAudioRecorderClose(event?: Blob): Promise<void> {
    this.state = Display.Editor;
    if (!event) return;
    this.audioURL = await this.blobToBase64(event);
  }

  attach(): void {
    console.log('Not implemented!');
  }

  blobToBase64(blob): Promise<string> {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  }
}
