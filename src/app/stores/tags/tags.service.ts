import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

import { TagsQuery } from './tags.query';
import { TagsStore, TagsState, TagPageUI } from './tags.store';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { GroupTodosBy, SortTodosBy } from '@stores/todos/todo.model';

export const initialUIState: Omit<TagPageUI, 'id'> = {
  groupedBy: GroupTodosBy.Default,
  sortedBy: SortTodosBy.Default,
};

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'tags' })
export class TagsService extends CollectionService<TagsState> {
  constructor(protected tagsStore: TagsStore, private tagsQuery: TagsQuery) {
    super(tagsStore);
  }

  setDefaultUIStateOfRouteTag(): void {
    this.tagsQuery
      .selectRouteTag()
      .pipe(take(1))
      .subscribe(state => {
        if (!state) return;
        this.setDefaultUIState(state.id);
      });
  }

  private setDefaultUIState(id: string): void {
    this.tagsStore.ui.add({ ...initialUIState, id });
  }
}
