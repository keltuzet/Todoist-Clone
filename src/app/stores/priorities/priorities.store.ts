import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Priority } from './priority.model';

export interface PrioritiesState extends EntityState<Priority> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'priorities' })
export class PrioritiesStore extends EntityStore<PrioritiesState> {
  constructor() {
    super();
  }
}
