import { dateToNonTmzJson } from '@shared/utils';
import { Project, TodoStatus } from '../project';
import { TodoComment, TodoCommentDetailed, TodoResponseComment } from './comment.model';
import { TodoPriority } from './priority.model';
import { TodoTag } from './tag.model';

export interface TodoResponse {
  id: number;
  projectId: number;
  priorityId: number;
  statusId: number;
  subTodoIds: number[];
  tagIds: number[];
  title: string;
  createdDate: string;
  endDate: string;
  comments: TodoResponseComment[];
  hasEndTime?: true;
}

export interface Todo extends Omit<TodoResponse, 'createdDate' | 'endDate' | 'comments'> {
  createdDate: Date;
  endDate: Date;
  comments: TodoComment[];
}

export interface TodoView extends Todo {
  project: Project;
  priority: TodoPriority;
  status: TodoStatus;
  tags: TodoTag[];
  comments: TodoCommentDetailed[];
}

export function todoToHttpBody(todo: TodoView): any {
  return {
    id: todo.id,
    projectId: todo.projectId,
    priorityId: todo.priorityId,
    statusId: todo.statusId,
    subTodoIds: todo.subTodoIds,
    tagIds: todo.tagIds,
    title: todo.title,
    createdDate: todo.createdDate,
    endDate: todo.endDate,
    comments: todo.comments.map(todoCommentToHttpBody),
    hasEndTime: todo.hasEndTime,
  };
}

export function todoCommentToHttpBody(comment: TodoCommentDetailed): any {
  return {
    id: comment.id,
    authorId: comment.authorId,
    postedDate: comment.postedDate,
    text: comment.text,
  };
}

export function parseTodoResp(todoResp: TodoResponse): Todo {
  return {
    ...todoResp,
    createdDate: new Date(todoResp.createdDate),
    endDate: new Date(todoResp.endDate),
    comments: todoResp.comments.map((comment) => ({ ...comment, postedDate: new Date(comment.postedDate) })),
  };
}
