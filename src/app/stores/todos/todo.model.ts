import { Timestamp } from 'firebase/firestore';
import { DetailedComment } from '@stores/comments';
import { Project, Status } from '../projects/project.model';
import { Tag } from '../tags/tag.model';
import { Priority } from '../priorities/priority.model';

export interface TodoFromFirestore {
  id: string;
  title: string;
  createdDate: Timestamp;
  endDate: Timestamp;
  subTodoIds: string[];
  tagIds: string[];
  commentsIds: string[];
  projectId?: string;
  priorityId?: string;
  statusId?: string;
  description?: string;
  hasEndTime?: true;
}

export interface Todo {
  id: string;
  title: string;
  createdDate: string;
  endDate: string;
  subTodoIds: string[];
  tagIds: string[];
  commentsIds: string[];
  projectId?: string;
  priorityId?: string;
  statusId?: string;
  description?: string;
  hasEndTime?: true;
}

export interface DetailedTodo extends Todo {
  project: Project;
  priority: Priority;
  status: Status;
  tags: Tag[];
  comments: DetailedComment[];
}

export interface CreateTodo extends Omit<Todo, 'id'> {}

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
