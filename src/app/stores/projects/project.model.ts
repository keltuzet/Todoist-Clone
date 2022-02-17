import { HashMap } from '@datorama/akita';

export interface Status {
  id: string;
  title: string;
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

export interface ProjectQueryModel extends Omit<Project, 'statuses'> {
  statuses: HashMap<Status>;
}
