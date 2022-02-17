import { Injectable } from '@angular/core';
import { EntityState, EntityStore, EntityUIStore, StoreConfig } from '@datorama/akita';
import { SortTodosBy, GroupTodosBy } from '@stores/todos/todo.model';
import { Tag } from './tag.model';

export interface TagPageUI {
  groupedBy: GroupTodosBy;
  sortedBy: SortTodosBy;
  id: string;
}

export interface TagsState extends EntityState<Tag> {}
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
