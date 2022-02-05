import { Injectable } from '@angular/core';
import { HashMap, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';

import { Author } from '@shared/models';
import { AuthorsStore, AuthorsState } from './authors.store';

@Injectable({ providedIn: 'root' })
export class AuthorsQuery extends QueryEntity<AuthorsState> {
  readonly all$: Observable<Author[]> = this.selectAll();
  readonly hashMap$: Observable<HashMap<Author>> = this.selectAll({ asObject: true });

  constructor(protected store: AuthorsStore) {
    super(store);
  }
}
