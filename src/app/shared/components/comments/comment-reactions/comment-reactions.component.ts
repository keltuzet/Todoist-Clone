import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthorsQuery } from '@stores/authors';
import { TodosService } from '@stores/todos';
import { EmojiMenuComponent } from '@shared/components';
import { CommentReactionDetails, Comment, CommentReactionAuthorDetails } from '@shared/models';

@Component({
  selector: 't-comment-reactions',
  templateUrl: './comment-reactions.component.html',
  styleUrls: ['./comment-reactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentReactionsComponent implements OnInit {
  @Input() relatedTodoId: number;
  @Input('comment') set setComment(value: Comment) {
    if (!value.reacts) return;
    this.comment = value;
    const commentReactionDetails: CommentReactionDetails[] = this.commentToReactionsDetails(value);
    this.reactions$.next(commentReactionDetails);
  }
  readonly authorsMap = new Map<number, CommentReactionAuthorDetails>();
  readonly reactions$ = new BehaviorSubject<CommentReactionDetails[]>([]);
  readonly emojiMenu = EmojiMenuComponent;
  private comment: Comment;

  constructor(private authorsQuery: AuthorsQuery, private todosService: TodosService) {}

  ngOnInit(): void {}

  react(emoji: string): void {
    if (!emoji) return;
    this.todosService.reactToComment(emoji, this.comment.id, this.relatedTodoId).subscribe();
  }

  private commentToReactionsDetails(comment: Comment): CommentReactionDetails[] {
    const reactionsEntries = Object.entries(comment.reacts);
    return reactionsEntries.map<CommentReactionDetails>(([emoji, authorsHint]) => {
      const authors = authorsHint.map<CommentReactionAuthorDetails>(({ authorId, reactedDate }) => {
        let authorDetails: CommentReactionAuthorDetails;
        if (this.authorsMap.has(authorId)) {
          authorDetails = this.authorsMap.get(authorId);
        } else {
          authorDetails = {
            ...this.authorsQuery.getEntity(authorId),
            authorId,
            reactedDate,
          };
          this.authorsMap.set(authorId, authorDetails);
        }

        return authorDetails;
      });

      return {
        emoji,
        authors,
        count: authors.length,
      };
    });
  }
}
