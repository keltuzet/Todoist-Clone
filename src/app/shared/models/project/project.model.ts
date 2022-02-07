import { HashMap } from '@datorama/akita';

export interface TodoStatus {
  id: number;
  title: string;
}

export interface TodoDetailedStatus extends TodoStatus {
  project: Project;
}

export interface Project {
  id: number;
  title: string;
  color: string;
  todoStatuses: TodoStatus[];
  isFavorite?: true;
  isShared?: true;
}

export interface ProjectQueryModel extends Omit<Project, 'todoStatuses'> {
  todoStatuses: HashMap<TodoStatus>;
}
