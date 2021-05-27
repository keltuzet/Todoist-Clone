import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { AuthorsStore, AuthorsState } from './authors.store';

@Injectable({ providedIn: 'root' })
export class AuthorsQuery extends QueryEntity<AuthorsState> {
  all$ = this.selectAll();
  allAsObj$ = this.selectAll({ asObject: true });

  constructor(protected store: AuthorsStore) {
    super(store);
  }
}
