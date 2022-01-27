import { Injectable } from '@angular/core';
import { EntityState, EntityStore, EntityUIStore, StoreConfig } from '@datorama/akita';
import { GroupTodosBy, SortTodosBy, TodoTag } from '@shared/models';

export interface TagPageUI {
  groupedBy: GroupTodosBy;
  sortedBy: SortTodosBy;
  id: number;
}

export interface TagsState extends EntityState<TodoTag> {}
export interface TagsUIState extends EntityState<TagPageUI> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tags' })
export class TagsStore extends EntityStore<TagsState> {
  ui: EntityUIStore<TagsUIState>;

  constructor() {
    super();
    this.createUIStore();
  }
}
