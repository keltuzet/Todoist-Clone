import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, MultiActiveState } from '@datorama/akita';
import { Project } from '@shared/models';

export interface ProjectsState extends EntityState<Project, number>, MultiActiveState<number> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'projects' })
export class ProjectsStore extends EntityStore<ProjectsState> {

  constructor() {
    super();
  }

}
