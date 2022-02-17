import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { IStatus } from './status.model';

export interface StatusesState extends EntityState<IStatus> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'statuses' })
export class StatusesStore extends EntityStore<StatusesState> {
  constructor() {
    super();
  }
}
