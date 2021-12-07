import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Author } from '@shared/models';

export interface AuthorsState extends EntityState<Author> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'authors' })
export class AuthorsStore extends EntityStore<AuthorsState> {
  constructor() {
    super();
  }
}
