import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { FaqStore, FaqState } from './faq.store';

@Injectable({ providedIn: 'root' })
export class FaqQuery extends QueryEntity<FaqState> {
  constructor(protected store: FaqStore) {
    super(store);
  }
}
