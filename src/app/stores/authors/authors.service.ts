import { Injectable } from '@angular/core';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';
import { AuthorsState, AuthorsStore } from './authors.store';

@NgEntityServiceConfig({
  resourceName: 'authors',
})
@Injectable({ providedIn: 'root' })
export class AuthorsService extends NgEntityService<AuthorsState> {
  constructor(protected store: AuthorsStore) {
    super(store);
  }
}
