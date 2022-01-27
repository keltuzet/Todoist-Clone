import { Component, ChangeDetectionStrategy, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 't-comment-editor',
  templateUrl: './comment-editor.component.html',
  styleUrls: ['./comment-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentEditorComponent {
  @ViewChild('textbox', { read: ElementRef }) textbox: ElementRef<HTMLDivElement>;
  @Output('comment') commentEvent = new EventEmitter<string>();
  readonly placeholder = 'Написать комментарий';

  comment(): void {
    const text = this.textbox.nativeElement.innerHTML;
    if (!text.trim()) return;
    this.commentEvent.emit(text);
    this.clearTextboxInner();
  }

  handleKeyUp(event: KeyboardEvent): void {
    if (event.code === 'Backspace' && this.isTextboxEmpty()) {
      this.clearTextboxInner();
    }
  }

  private clearTextboxInner(): void {
    this.textbox.nativeElement.innerHTML = '';
  }

  private isTextboxEmpty(): boolean {
    const textboxEl = this.textbox.nativeElement;
    return (
      textboxEl.childNodes.length <= 1 &&
      (textboxEl.firstChild instanceof HTMLBRElement || textboxEl.firstChild instanceof HTMLDivElement)
    );
  }
}
