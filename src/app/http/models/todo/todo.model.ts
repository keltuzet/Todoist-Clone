import { Author } from '../author';
import { TodoStatus } from '../project';
import { TodoComment } from './comment.model';
import { TodoPriority } from './priority.model';
import { TodoTag } from './tag.model';

export interface TodoResponse {
  id: number;
  title: string;
  priorityId: number;
  createdDate: string;
  endDate: string;
  hasEndTime: boolean;
  subTodoIds: number[];
  comments: TodoComment[];
  tags: TodoTag[];
}

export interface Todo extends Omit<TodoResponse, 'createdDate' | 'endDate'> {
  id: number;
  title: string;
  priorityId: number;
  createdDate: Date;
  endDate: Date;
  hasEndTime: boolean;
  subTodoIds: number[];
  comments: TodoComment[];
  tags: TodoTag[];
}

export interface TodoView extends Todo {
  id: number;
  title: string;
  priorityId: number;
  createdDate: Date;
  endDate: Date;
  hasEndTime: boolean;
  subTodoIds: number[];
  comments: (TodoComment & { author: Author })[];
  priority: TodoPriority;
  statuses: TodoStatus[];
  tags: TodoTag[];
}
