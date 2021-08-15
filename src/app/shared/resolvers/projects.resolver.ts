import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProjectsService } from '@stores/projects';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectsResolver implements Resolve<boolean> {
  constructor(private projectsService: ProjectsService) {}

  resolve(): Observable<boolean> {
    this.projectsService.get().subscribe();
    return of(true);
  }
}
