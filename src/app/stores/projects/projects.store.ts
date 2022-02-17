import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, MultiActiveState } from '@datorama/akita';
import { Project } from './project.model';

export interface ProjectsState extends EntityState<Project>, MultiActiveState<number> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'projects' })
export class ProjectsStore extends EntityStore<ProjectsState> {
  constructor() {
    super();
  }
}
