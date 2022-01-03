import { Injectable } from '@angular/core';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';
import { ProjectsState, ProjectsStore } from './projects.store';

@NgEntityServiceConfig({
  resourceName: 'projects',
})
@Injectable({
  providedIn: 'root',
})
export class ProjectsService extends NgEntityService<ProjectsState> {
  constructor(protected store: ProjectsStore) {
    super(store);
  }

  saveProjects() {
    // this.update
  }
}
