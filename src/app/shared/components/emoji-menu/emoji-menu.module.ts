import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { EmojiMenuComponent } from './emoji-menu.component';

@NgModule({
  declarations: [EmojiMenuComponent],
  imports: [CommonModule, AngularSvgIconModule, ScrollingModule],
  exports: [EmojiMenuComponent],
})
export class EmojiMenuModule {}
