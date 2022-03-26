import { HashMap } from '@datorama/akita';
import { DetailedTodo, Todo } from '@stores/todos';

export interface Status {
  id: string;
  title: string;
}

export interface StatusWithTodos extends Status {
  todos: DetailedTodo[];
}

export interface DetailedStatus extends Status {
  project: Project;
}

export interface Project {
  id: string;
  title: string;
  color: string;
  statuses: Status[];
  isFavorite?: true;
  isShared?: true;
}

export interface ProjectWithTodos extends Project {
  statuses: StatusWithTodos[];
}

export interface ProjectQueryModel extends Omit<Project, 'statuses'> {
  statuses: HashMap<Status>;
}
