import { Injectable } from '@angular/core';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';
import { take } from 'rxjs/operators';

import { GroupTodosBy, SortTodosBy } from '@shared/models';
import { TagsQuery } from './tags.query';
import { TagsStore, TagsState, TagPageUI } from './tags.store';

export const initialUIState: Omit<TagPageUI, 'id'> = {
  groupedBy: GroupTodosBy.Default,
  sortedBy: SortTodosBy.Default,
};

@NgEntityServiceConfig({
  resourceName: 'tags',
})
@Injectable({ providedIn: 'root' })
export class TagsService extends NgEntityService<TagsState> {
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

  private setDefaultUIState(id: number): void {
    this.tagsStore.ui.add({ ...initialUIState, id });
  }
}
