import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TooltipModule } from 'todoist-tooltip';

import { ButtonModule } from '@features/button/button.module';
import { PixelCssUnitModule } from '@shared/pipes';
import { CommentEditorComponent } from './comment-editor/comment-editor.component';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  declarations: [CommentEditorComponent, CommentComponent, CommentListComponent],
  imports: [CommonModule, AngularSvgIconModule, ButtonModule, TooltipModule, PixelCssUnitModule],
  exports: [CommentEditorComponent, CommentComponent, CommentListComponent],
})
export class CommentsModule {}
