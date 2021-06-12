import { Injectable } from '@angular/core';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';

import { TagsStore, TagsState } from './tags.store';

@NgEntityServiceConfig({
  resourceName: 'tags',
})
@Injectable({ providedIn: 'root' })
export class TagsService extends NgEntityService<TagsState> {
  constructor(protected tagsStore: TagsStore) {
    super(tagsStore);
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
