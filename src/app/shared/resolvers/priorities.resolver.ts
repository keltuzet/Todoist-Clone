import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PrioritiesService } from '@stores/priorities/priorities.service';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PrioritiesResolver implements Resolve<boolean> {
  constructor(prioritiesService: PrioritiesService) {
    prioritiesService.syncCollection().subscribe();
  }

  resolve(): Observable<boolean> {
    return of(true);
  }
}
