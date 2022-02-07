import { Component, ChangeDetectionStrategy, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 't-comment-editor',
  templateUrl: './comment-editor.component.html',
  styleUrls: ['./comment-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentEditorComponent {
  @ViewChild('textbox', { read: ElementRef, static: true }) textbox: ElementRef<HTMLDivElement>;
  @Input() placeholder = 'Написать комментарий';
  @Input() set text(value: string) {
    if (!value) return;
    this.textbox.nativeElement.innerHTML = value;
  }
  get text(): string {
    return this.textbox.nativeElement.innerHTML;
  }

  handleKeyUp(event: KeyboardEvent): void {
    if (event.code === 'Backspace' && this.isTextboxEmpty()) {
      this.clearTextboxInner();
    }
  }

  clearTextboxInner(): void {
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
