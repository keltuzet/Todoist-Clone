import { HashMap } from '@datorama/akita';

export interface TodoStatus {
  id: number;
  title: string;
}

export interface Project {
  id: number;
  title: string;
  todoStatuses: TodoStatus[];
  color: string;
}

export interface ProjectQueryModel extends Omit<Project, 'todoStatuses'> {
  todoStatuses: HashMap<TodoStatus>;
}
