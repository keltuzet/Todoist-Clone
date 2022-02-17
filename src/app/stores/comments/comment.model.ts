import { Timestamp } from 'firebase/firestore';
import { User } from '../users/user.model';

export interface CommentFromFirestore {
  id: string;
  postedDate: Timestamp;
  text: string;
  authorId: string;
  todoId?: string;
  isEdited?: true;
  lastEditedDate?: Timestamp;
  reacts?: CommentReaction;
}

export interface Comment {
  id: string;
  postedDate: string;
  text: string;
  authorId: string;
  isEdited?: true;
  lastEditedDate?: string;
  reacts?: CommentReaction;
}

export interface DetailedComment extends Comment {
  author: User;
}

export interface CommentReaction {
  [emoji: string]: CommentReactionAuthorHint[];
}

export interface CommentReactionAuthorHint {
  authorId: string;
  reactedDate: string;
}

export interface CommentReactionAuthorDetails extends CommentReactionAuthorHint, User {}

export interface CommentReactionDetails {
  emoji: string;
  authors: CommentReactionAuthorDetails[];
  count: number;
}
