import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TooltipModule } from 'todoist-tooltip';

import { ButtonModule } from '@features/button/button.module';
import { PixelCssUnitModule } from '@shared/pipes';
import { CommentEditorComponent } from './comment-editor/comment-editor.component';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { NgxLetDirectiveModule } from 'ngx-let-directive';
import { MenuModule } from 'todoist-menu';
import { EmojiMenuModule } from '../emoji-menu/emoji-menu.module';
import { CommentReactionsComponent } from './comment-reactions/comment-reactions.component';
import { AudioRecorderModule } from '@features/audio-recorder';

@NgModule({
  declarations: [
    CommentEditorComponent,
    CommentComponent,
    CommentListComponent,
    PostCommentComponent,
    CommentReactionsComponent,
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    ButtonModule,
    TooltipModule,
    PixelCssUnitModule,
    NgxLetDirectiveModule,
    MenuModule,
    EmojiMenuModule,
    AudioRecorderModule,
  ],
  exports: [
    CommentEditorComponent,
    CommentComponent,
    CommentListComponent,
    PostCommentComponent,
    CommentReactionsComponent,
  ],
})
export class CommentsModule {}
