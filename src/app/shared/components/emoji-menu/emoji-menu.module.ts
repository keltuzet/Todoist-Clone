import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiMenuComponent } from './emoji-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [EmojiMenuComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [EmojiMenuComponent],
})
export class EmojiMenuModule {}
