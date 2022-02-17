import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { Observable, of } from 'rxjs';
import { ProjectsState, ProjectsStore } from './projects.store';

@Injectable({
  providedIn: 'root',
})
@CollectionConfig({ path: 'projects' })
export class ProjectsService extends CollectionService<ProjectsState> {
  constructor(store: ProjectsStore) {
    super(store);
  }

  duplicate(project: Project): Observable<Project> {
    // return this.add({ ...project, id: null, title: `Копия ${project.title}` });
    return of();
  }
}
