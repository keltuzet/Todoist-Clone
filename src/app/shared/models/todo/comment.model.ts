import { Author } from '../author';

export interface Comment {
  id: number;
  postedDate: string;
  text: string;
  authorId: number;
  isEdited?: true;
  lastEditedDate?: string;
  reacts?: CommentReaction;
}

export interface DetailedComment extends Comment {
  author: Author;
}

export interface CommentReaction {
  [emoji: string]: CommentReactionAuthorHint[];
}

export interface CommentReactionAuthorHint {
  authorId: number;
  reactedDate: string;
}

export interface CommentReactionAuthorDetails extends CommentReactionAuthorHint, Author {}

export interface CommentReactionDetails {
  emoji: string;
  authors: CommentReactionAuthorDetails[];
  count: number;
}
