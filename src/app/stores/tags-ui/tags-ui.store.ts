import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { GroupTodosBy } from '@shared/models';

export interface TagsUI {
  groupedBy: GroupTodosBy;
  id: number;
}

export interface TagsUiState extends EntityState<TagsUI> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tags-ui' })
export class TagsUiStore extends EntityStore<TagsUiState> {
  constructor() {
    super();
  }
}
