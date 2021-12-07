import { Component, OnInit } from '@angular/core';

import { Project } from '@shared/models';
import { ProjectsQuery } from '@stores/projects/projects.query';

@Component({
  selector: 'app-nav-project-list',
  templateUrl: './nav-project-list.component.html',
  styleUrls: ['./nav-project-list.component.scss'],
})
export class NavProjectListComponent implements OnInit {
  list$ = this.projectsQuery.all$;

  constructor(private projectsQuery: ProjectsQuery) {}

  ngOnInit(): void {}

  projectTrackyBy(index: number, item: Project) {
    return item.id;
  }
}
