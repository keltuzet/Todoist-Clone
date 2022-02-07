import { Injectable } from '@angular/core';
import { HashMap, QueryEntity } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { Project, TodoStatus, TodoDetailedStatus } from '@shared/models';
import { entityToObj, selectArrProps } from '@shared/utils';
import { ProjectsStore, ProjectsState } from './projects.store';

@Injectable({ providedIn: 'root' })
export class ProjectsQuery extends QueryEntity<ProjectsState> {
  readonly all$: Observable<Project[]> = this.selectAll();
  readonly hashMap$: Observable<HashMap<Project>> = this.selectAll({ asObject: true });
  readonly statusHashMap$: Observable<HashMap<TodoStatus>> = this.selectStatusHashMap();
  readonly detailedStatuses$: Observable<TodoDetailedStatus[]> = this.selectAllDetailedStatuses();

  constructor(protected store: ProjectsStore, private routerQuery: RouterQuery) {
    super(store);
  }

  selectRouteProject(): Observable<Project> {
    return this.routerQuery.selectParams('id').pipe(
      switchMap((id: string) => {
        return this.selectEntity(+id);
      }),
      filter(project => Boolean(project)),
    );
  }

  private selectStatusHashMap(): Observable<HashMap<TodoStatus>> {
    return this.selectAll().pipe(map(selectArrProps('todoStatuses')), map(entityToObj));
  }

  private selectAllDetailedStatuses(): Observable<TodoDetailedStatus[]> {
    return this.selectAll().pipe(
      map(projects => {
        const statuses: TodoDetailedStatus[] = [];
        projects.forEach(project => {
          statuses.push(...project.todoStatuses.map(status => ({ ...status, project })));
        });

        return statuses;
      }),
    );
  }
}
