import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MenuRef } from 'todoist-menu';

@Component({
  selector: 't-emoji-menu',
  templateUrl: './emoji-menu.component.html',
  styleUrls: ['./emoji-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmojiMenuComponent implements OnInit {
  recent: string[] = [];
  peopleAndEmoticons: string[] = ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂'];
  AnimalsAndNature: string[] = ['🐵', '🐒', '🦍', '🦧', '🐶', '🐕', '🦮', '🐕‍🦺'];
  nav: string[] = [
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

  constructor(private menuRef: MenuRef) {}

  ngOnInit(): void {}

  select(emoji: string): void {
    this.menuRef.close(emoji);
  }
}
