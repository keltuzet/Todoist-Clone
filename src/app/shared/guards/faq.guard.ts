import { Injectable } from '@angular/core';
import { CollectionGuard } from 'akita-ng-fire';
import { FaqService, FaqState } from '@stores/faq';

@Injectable({ providedIn: 'root' })
export class FaqGuard extends CollectionGuard<FaqState> {
  constructor(service: FaqService) {
    super(service);
  }
}
