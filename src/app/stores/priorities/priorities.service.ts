import { Injectable } from '@angular/core';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { PrioritiesState, PrioritiesStore } from './priorities.store';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'priorities' })
export class PrioritiesService extends CollectionService<PrioritiesState> {
  constructor(store: PrioritiesStore) {
    super(store);
  }
}
