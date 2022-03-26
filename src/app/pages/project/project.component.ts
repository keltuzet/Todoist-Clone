import { Overlay, OverlayContainer, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SnackbarService } from '@features/snackbar/services/snackbar.service';
import { trackByIdentity } from '@shared/utils';
import { ProjectsQuery, ProjectWithTodos, Status, StatusWithTodos } from '@stores/projects';
import { StatusesQuery } from '@stores/statuses';
import { TodosQuery } from '@stores/todos';
import { combineLatest, Observable, of } from 'rxjs';
import { delay, map, switchMap, tap } from 'rxjs/operators';
import { ProjectNotFoundComponent } from './components';

@Component({
  selector: 't-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  readonly project$ = this.getProject().pipe(tap(console.log));
  readonly trackByID = trackByIdentity<Status>('id');

  constructor(
    private snackbarService: SnackbarService,
    private projectsQuery: ProjectsQuery,
    private statusesQuery: StatusesQuery,
    private activatedRoute: ActivatedRoute,
    private o: OverlayContainer,
    private overlay: Overlay,
    private todosQuery: TodosQuery,
  ) {}

  ngOnInit(): void {}

  getProject(): Observable<ProjectWithTodos> {
    return this.projectsQuery.selectRouteProject().pipe(
      switchMap(project => {
        const statuses$: Observable<StatusWithTodos[]> = combineLatest(
          project.statuses.map(status =>
            this.todosQuery.selectByStatusID(status.id).pipe(map(todos => ({ ...status, todos }))),
          ),
        );

        return statuses$.pipe(map(statuses => ({ ...project, statuses })));

        // const statuses: StatusWithTodos[] = project.statuses.map(status => ({
        //   ...status,
        //   todos: this.todosQuery.getByStatusID(status.id),
        // }));

        // return {
        //   ...project,
        //   statuses,
        // };
      }),
    );
  }
}
