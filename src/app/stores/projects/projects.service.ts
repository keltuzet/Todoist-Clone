import { Injectable } from '@angular/core';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';
import { Project } from '@shared/models';
import { Observable } from 'rxjs';
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

  duplicate(project: Project): Observable<Project> {
    return this.add({ ...project, id: null, title: `Копия ${project.title}` });
  }
}
