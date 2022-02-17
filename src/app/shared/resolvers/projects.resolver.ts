import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { orderBy } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { ProjectsService } from '@stores/projects';

@Injectable({ providedIn: 'root' })
export class ProjectsResolver implements Resolve<boolean> {
  constructor(projectsService: ProjectsService) {
    projectsService.syncCollection([orderBy('order', 'asc')]).subscribe();
  }

  resolve(): Observable<boolean> {
    return of(true);
  }
}
