import { Author } from '../author';

export interface TodoResponseComment {
  id: number;
  postedDate: string;
  text: string;
  authorId: number;
}

export interface TodoComment extends Omit<TodoResponseComment, 'postedDate'> {
  postedDate: Date;
}

export interface TodoCommentDetailed extends TodoComment {
  author: Author;
}
