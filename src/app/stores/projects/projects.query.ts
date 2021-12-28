import { Injectable } from '@angular/core';
import { HashMap, QueryEntity } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Project, ProjectQueryModel, TodoStatusDetailed } from '@shared/models';
import { entityToObj, selectArrProps } from '@shared/utils';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ProjectsStore, ProjectsState } from './projects.store';

@Injectable({ providedIn: 'root' })
export class ProjectsQuery extends QueryEntity<ProjectsState> {
  all$ = this.selectAll();
  hashMap$ = this.selectAll({ asObject: true });

  todoStatusesHashMap$ = this.selectAll().pipe(map(selectArrProps('todoStatuses')), map(entityToObj));
  todoStatuses$ = this.selectAll().pipe(map(selectArrProps('todoStatuses')));

  todoStatusesDetailed$: Observable<TodoStatusDetailed[]> = this.selectAll().pipe(
    map((projects) => {
      const statuses: TodoStatusDetailed[] = [];
      projects.forEach((project) => {
        statuses.push(...project.todoStatuses.map((status) => ({ ...status, project })));
      });

      return statuses;
    }),
  );

  constructor(protected store: ProjectsStore, private routerQuery: RouterQuery) {
    super(store);
  }

  // This function isn't used, remove it if it's unnecessary
  private selectProjectsAsQuery(): Observable<HashMap<ProjectQueryModel>> {
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

  selectDetailedStatus(projects: Project[]): TodoStatusDetailed[] {
    const statuses: TodoStatusDetailed[] = [];
    projects.forEach((project) => {
      statuses.push(...project.todoStatuses.map((status) => ({ ...status, project })));
    });

    return statuses;
  }

  selectSelectedProperty(): Observable<Project> {
    return this.routerQuery.selectParams('id').pipe(
      switchMap((id: string) => {
        return this.selectEntity(+id);
      }),
      filter((project) => Boolean(project)),
    );
  }
}
