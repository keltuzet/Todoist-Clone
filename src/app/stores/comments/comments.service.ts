import { Injectable } from '@angular/core';
import { MeQuery } from '@stores/me';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { Timestamp } from 'firebase/firestore';
import { from, Observable, of, throwError } from 'rxjs';
import { Comment, CommentFromFirestore, CommentReaction } from './comment.model';
import { CommentsQuery } from './comments.query';
import { CommentsState, CommentsStore } from './comments.store';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'comments' })
export class CommentsService extends CollectionService<CommentsState> {
  constructor(commentsStore: CommentsStore, private query: CommentsQuery, private me: MeQuery) {
    super(commentsStore);
  }

  updateComment(commentId: string, comment: Partial<Comment>): Observable<void> {
    return from(
      this.update({
        ...this.query.getEntity(commentId),
        ...comment,
      }),
    );
  }

  editComment(commentId: string, text: string): Observable<void> {
    return this.updateComment(commentId, {
      text,
      isEdited: true,
      lastEditedDate: new Date().toJSON(),
    });
  }

  reactToComment(emoji: string, commentId: string): Observable<void> {
    const comment = this.query.getEntity(commentId);
    if (!comment) return this.throwNotFoundError();
    const myId = this.me.getMyId();
    const reacts: CommentReaction = { ...comment.reacts };
    const hasReactedEmoji = Boolean(reacts[emoji]?.length);
    const alreadyReactedByMe = hasReactedEmoji ? Boolean(reacts[emoji].find(info => info.authorId === myId)) : false;
    if (!hasReactedEmoji) reacts[emoji] = [];
    if (alreadyReactedByMe) return of();
    reacts[emoji].push({
      authorId: myId,
      reactedDate: new Date().toJSON(),
    });
    return this.updateComment(commentId, { reacts });
  }

  unreactToComment(emoji: string, commentId: string): Observable<void> {
    const comment = this.query.getEntity(commentId);
    if (!comment) return this.throwNotFoundError();
    const myId = this.me.getMyId();
    const reacts: CommentReaction = { ...comment.reacts };
    const targetReact = reacts[emoji];
    const hasReactedEmoji = Boolean(targetReact?.length);
    if (!hasReactedEmoji) of();
    reacts[emoji] = targetReact.filter(item => item.authorId !== myId);
    return this.updateComment(commentId, { reacts });
  }

  toggleReactToComment(emoji: string, commentId: string): Observable<void> {
    const comment = this.query.getEntity(commentId);
    if (!comment) return this.throwNotFoundError();
    const myId = this.me.getMyId();
    const emojis = Object.keys(comment.reacts);
    const hasAnyReactions = Boolean(emojis.length);
    const reaction = comment.reacts[emoji];
    if (!hasAnyReactions || !reaction) return this.reactToComment(emoji, commentId);
    const alreadyReactedByMe = Boolean(comment.reacts[emoji].find(info => info.authorId === myId));
    return alreadyReactedByMe ? this.unreactToComment(emoji, commentId) : this.reactToComment(emoji, commentId);
  }

  formatFromFirestore(comment: CommentFromFirestore): Comment {
    const parsedComment: Dictionary = {
      ...comment,
      postedDate: comment.postedDate.toDate().toJSON(),
    };
    if (comment.lastEditedDate) parsedComment.lastEditedDate = comment.lastEditedDate.toDate().toJSON();
    return parsedComment as Comment;
  }

  formatToFirestore(comment: Comment): CommentFromFirestore {
    const formatedComment: Dictionary = {
      ...comment,
      postedDate: Timestamp.fromDate(new Date(comment.postedDate)),
    };
    if (comment.lastEditedDate) formatedComment.lastEditedDate = Timestamp.fromDate(new Date(comment.lastEditedDate));
    return formatedComment as CommentFromFirestore;
  }

  private generateNotFoundError(): Error {
    return new Error('Comment not found!');
  }

  private throwNotFoundError(): Observable<never> {
    return throwError(this.generateNotFoundError);
  }
}
