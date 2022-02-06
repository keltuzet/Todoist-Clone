import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProjectActionsMenuComponent } from '@shared/components';

import { Project } from '@shared/models';
import { UnsubscribeService } from '@shared/services';
import { ProjectsQuery } from '@stores/projects/projects.query';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 't-nav-project-list',
  templateUrl: './nav-project-list.component.html',
  styleUrls: ['./nav-project-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService],
})
export class NavProjectListComponent implements OnInit {
  projects: Project[];
  readonly projectActionsMenu = ProjectActionsMenuComponent;

  constructor(
    private projectsQuery: ProjectsQuery,
    private changeDetectorRef: ChangeDetectorRef,
    private unsubscribe: UnsubscribeService,
  ) {}

  ngOnInit(): void {
    this.projectsQuery.all$.pipe(takeUntil(this.unsubscribe)).subscribe(projects => {
      this.projects = projects;
      this.changeDetectorRef.markForCheck();
    });
  }

  projectTrackyBy(index: number, item: Project): number {
    return item.id;
  }

  drop(event: CdkDragDrop<Project[]>): void {
    moveItemInArray(this.projects, event.previousIndex, event.currentIndex);
  }
}
