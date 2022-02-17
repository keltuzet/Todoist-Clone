import { Injectable } from '@angular/core';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { UsersState, UsersStore } from './users.store';

@Injectable({
  providedIn: 'root',
})
@CollectionConfig({ path: 'users' })
export class UsersService extends CollectionService<UsersState> {
  constructor(store: UsersStore) {
    super(store);
  }
}
