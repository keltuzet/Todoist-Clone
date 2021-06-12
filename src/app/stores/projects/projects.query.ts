import { Injectable } from '@angular/core';
import { HashMap, QueryEntity } from '@datorama/akita';
import { ProjectQueryModel } from '@shared/models';
import { entityToObj, selectArrProps } from '@shared/utils';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectsStore, ProjectsState } from './projects.store';

@Injectable({ providedIn: 'root' })
export class ProjectsQuery extends QueryEntity<ProjectsState> {
  all$ = this.selectAll();
  hashMap$ = this.selectAll({ asObject: true });

  allTodoStatusesAsObj$ = this.selectAll().pipe(map(selectArrProps('todoStatuses')), map(entityToObj));
  allTodoStatuses$ = this.selectAll().pipe(map(selectArrProps('todoStatuses')));

  constructor(protected store: ProjectsStore) {
    super(store);
  }

  selectTodoStatuses(option) {
    this.selectAll(option);
  }

  selectProjectsAsQuery(): Observable<HashMap<ProjectQueryModel>> {
    return this.hashMap$.pipe(
      map((projects) =>
        Object.entries(projects).reduce((hashMap, [key, val]) => {
          hashMap[key] = {
            ...val,
            todoStatuses: entityToObj(val.todoStatuses),
          };
          return hashMap;
        }, {}),
      ),
    );
  }
}
