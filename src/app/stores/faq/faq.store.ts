import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { FAQ } from './faq.model';

export interface FaqState extends EntityState<FAQ> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'colors' })
export class FaqStore extends EntityStore<FaqState> {
  constructor() {
    super();
  }
}
