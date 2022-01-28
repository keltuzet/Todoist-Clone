import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommentReactionDetails, Comment, Author, CommentReactionAuthorDetails } from '@shared/models';
import { AuthorsQuery } from '@stores/authors';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 't-comment-reactions',
  templateUrl: './comment-reactions.component.html',
  styleUrls: ['./comment-reactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentReactionsComponent implements OnInit {
  @Input('comment') set setComment(value: Comment) {
    if (!value.reacts) return;
    const commentReactionDetails: CommentReactionDetails[] = Object.entries(value.reacts).map<CommentReactionDetails>(
      ([emoji, info]) => {
        const authors = info.map(({ authorId, reactedDate }) => {
          if (this.authorsMap.has(authorId)) {
            return this.authorsMap.get(authorId);
          } else {
            const authorDetails: CommentReactionAuthorDetails = {
              ...this.authorsQuery.getEntity(authorId),
              authorId,
              reactedDate,
            };
            this.authorsMap.set(authorId, authorDetails);
            return authorDetails;
          }
        });
        return {
          emoji,
          authors,
          count: authors.length,
        };
      },
    );
    this.reactions$.next(commentReactionDetails);
  }
  readonly authorsMap = new Map<number, CommentReactionAuthorDetails>();
  readonly reactions$ = new BehaviorSubject<CommentReactionDetails[]>([]);

  constructor(private authorsQuery: AuthorsQuery) {}

  ngOnInit(): void {}
}
