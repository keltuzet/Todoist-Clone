import { Injectable } from '@angular/core';
import { HashMap, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { UsersStore, UsersState } from './users.store';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<UsersState> {
  readonly hashMap$: Observable<HashMap<User>> = this.selectAll({ asObject: true });

  constructor(protected store: UsersStore) {
    super(store);
  }
}
