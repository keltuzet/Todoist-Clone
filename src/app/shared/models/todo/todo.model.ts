
import { Project, TodoStatus } from '../project';
import { TodoPriority } from './priority.model';
import { TodoTag } from './tag.model';
import { Comment, DetailedComment } from './comment.model';

export interface Todo {
  id: number;
  title: string;
  createdDate: string;
  endDate: string;
  comments: Comment[];
  subTodoIds: number[];
  tagIds: number[];
  projectId?: number;
  priorityId?: number;
  statusId?: number;
  description?: string;
  hasEndTime?: true;
}

export interface DetailedTodo extends Todo {
  project: Project;
  priority: TodoPriority;
  status: TodoStatus;
  tags: TodoTag[];
  comments: DetailedComment[];
}

export interface CreateTodo extends Omit<Todo, 'id'> {}

export function todoToHttpBody(todo: Todo): any {
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
    comments: todo.comments,
    description: todo.description,
    hasEndTime: todo.hasEndTime,
  };
}

// export function todoCommentToHttpBody(comment: TodoCommentDetailed): any {
//   return {
//     id: comment.id,
//     authorId: comment.authorId,
//     postedDate: comment.postedDate,
//     text: comment.text,
//   };
// }

// export const parseTodoResp = (todoResp: TodoResponse): ExtractedTodo => ({
//   ...todoResp,
//   comments: todoResp.comments.map((comment) => ({ ...comment, postedDate: new Date(comment.postedDate) })),
// });

export enum GroupTodosBy {
  Default = 'По умолчанию',
  PeriodOfExecution = 'Срок выполнения',
  DateAdded = 'Дата добавления',
  Priority = 'Приоритет',
  Tag = 'Метка',
  Project = 'Проект',
}

export enum SortTodosBy {
  Default = 'По умолчанию',
  Alphabetically = 'По алфавиту',
  Performer = 'Исполнитель',
  PeriodOfExecution = 'Срок выполнения',
  DateAdded = 'Дата добавления',
  Priority = 'Приоритет',
  Project = 'Проект',
}
