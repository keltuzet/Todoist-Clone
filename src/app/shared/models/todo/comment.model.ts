import { Author } from '../author';

export interface Comment {
  id: number;
  postedDate: string;
  text: string;
  authorId: number;
}

export interface DetailedComment extends Comment {
  author: Author;
}
