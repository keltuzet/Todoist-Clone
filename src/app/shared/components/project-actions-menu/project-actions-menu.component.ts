import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { MenuRef, MENU_DATA } from 'todoist-menu';
import { Project } from '@stores/projects';
import { ProjectsQuery, ProjectsService } from '@stores/projects';
import { Dialog } from '@features/dialog';
import { EditProjectDialogComponent } from './edit-project-dialog/edit-project-dialog.component';

@Component({
  selector: 't-project-actions',
  templateUrl: './project-actions-menu.component.html',
  styleUrls: ['./project-actions-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectActionsMenuComponent implements OnInit {
  readonly project$ = this.getProject();

  constructor(
    @Inject(MENU_DATA) private projectId$: Observable<number>,
    private dialogRef: MenuRef,
    private projectsQuery: ProjectsQuery,
    private projectsService: ProjectsService,
    private dialog: Dialog,
  ) {}

  ngOnInit(): void {}

  getProject(): Observable<Project> {
    return this.projectId$.pipe(switchMap(id => this.projectsQuery.selectEntity(id)));
  }

  markAsFavorite(): void {
    this.project$
      .pipe(
        take(1),
        // switchMap(project =>
        //   this.projectsService.update(project.id, {
        //     ...project,
        //     isFavorite: true,
        //   }),
        // ),
        switchMap(project => of()),
      )
      .subscribe();
  }

  duplicate(): void {
    this.project$
      .pipe(
        take(1),
        switchMap(project => this.projectsService.duplicate(project)),
      )
      .subscribe();
  }

  leave(): void {
    this.project$
      .pipe(
        take(1),
        switchMap(({ id }) => of()),
        // switchMap(({ id }) => this.projectsService.delete(id)),
      )
      .subscribe();
  }

  remove(): void {
    this.project$
      .pipe(
        take(1),
        // switchMap(({ id }) => this.projectsService.delete(id)),
        switchMap(({ id }) => of()),
      )
      .subscribe();
  }

  edit(): void {
    this.project$.pipe(take(1)).subscribe(project => {
      this.dialog.open(EditProjectDialogComponent, {
        data: project,
      });
    });
  }
}
