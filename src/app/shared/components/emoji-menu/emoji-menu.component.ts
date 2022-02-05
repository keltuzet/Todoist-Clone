import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EmojisService } from '@http/services';
import { MenuRef } from 'todoist-menu';

@Component({
  selector: 't-emoji-menu',
  templateUrl: './emoji-menu.component.html',
  styleUrls: ['./emoji-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmojiMenuComponent {
  readonly recent = this.emojisService.getRecent();
  readonly nav: string[] = [
    'clock',
    'emoji-solid',
    'dog',
    'pizza',
    'airplane',
    'basketball-ball',
    'lamp',
    'heart-solid',
    'flag-solid',
    'bell-solid',
  ];
  readonly emojiGroups$ = this.emojisService.getAll();

  constructor(private menuRef: MenuRef, private emojisService: EmojisService) {}

  select(emoji: string, markAsRecent = true): void {
    if (markAsRecent) this.emojisService.markAsRecent(emoji);
    this.menuRef.close(emoji);
  }
}
