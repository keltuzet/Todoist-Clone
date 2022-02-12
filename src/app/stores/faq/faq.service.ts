import { Injectable } from '@angular/core';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { FaqState, FaqStore } from './faq.store';

@Injectable({
  providedIn: 'root',
})
@CollectionConfig({ path: 'faq' })
export class FaqService extends CollectionService<FaqState> {
  constructor(store: FaqStore) {
    super(store);
  }
}
