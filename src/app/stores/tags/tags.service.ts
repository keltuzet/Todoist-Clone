import { Injectable } from '@angular/core';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';
import { GroupTodosBy, SortTodosBy } from '@shared/models';
import { take } from 'rxjs/operators';
import { TagsQuery } from './tags.query';

import { TagsStore, TagsState, TagsUIState, TagPageUI } from './tags.store';

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

  setDefaultUIState(id: number): void {
    this.tagsStore.ui.add({ ...initialUIState, id });
  }

  setDefaultUIStateOfSelected(): void {
    this.tagsQuery
      .selectSelectedTag()
      .pipe(take(1))
      .subscribe((state) => {
        if (!state) return;
        this.setDefaultUIState(state.id);
      });
  }

  // get() {
  //   return this.http.get<Tag[]>('https://api.com').pipe(
  //     tap((entities) => {
  //       this.tagsStore.set(entities);
  //     }),
  //   );
  // }

  // add(tag: Tag) {
  //   this.tagsStore.add(tag);
  // }

  // update(id, tag: Partial<Tag>) {
  //   this.tagsStore.update(id, tag);
  // }

  // remove(id: ID) {
  //   this.tagsStore.remove(id);
  // }
}
