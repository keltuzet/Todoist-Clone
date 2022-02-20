import { Injectable } from '@angular/core';
import { HashMap, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { PrioritiesStore, PrioritiesState } from './priorities.store';
import { Priority } from './priority.model';

@Injectable({ providedIn: 'root' })
export class PrioritiesQuery extends QueryEntity<PrioritiesState> {
  readonly hashMap$: Observable<HashMap<Priority>> = this.selectAll({ asObject: true });

  constructor(protected store: PrioritiesStore) {
    super(store);
  }

  selectDefault(): Observable<Priority> {
    return this.selectEntity((priority: Priority) => priority.default);
  }
}
