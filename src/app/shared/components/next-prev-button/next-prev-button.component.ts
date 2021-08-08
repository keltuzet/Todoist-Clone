import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 't-next-prev-button',
  templateUrl: './next-prev-button.component.html',
  styleUrls: ['./next-prev-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextPrevButtonComponent {
  @Input() disable: 'next' | 'prev' | 'all';

  @Output() btnClick = new EventEmitter<'next' | 'prev'>();

  handleBtnClick(btn: 'next' | 'prev'): void {
    this.btnClick.emit(btn);
  }
}
