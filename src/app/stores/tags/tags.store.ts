import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TodoTag } from '@shared/models';

export interface TagsState extends EntityState<TodoTag> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tags' })
export class TagsStore extends EntityStore<TagsState> {
  constructor() {
    super();
  }
}
