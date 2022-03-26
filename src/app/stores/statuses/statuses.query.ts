import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { StatusesStore, StatusesState } from './statuses.store';

@Injectable({ providedIn: 'root' })
export class StatusesQuery extends QueryEntity<StatusesState> {
  constructor(protected store: StatusesStore) {
    super(store);
  }
}
