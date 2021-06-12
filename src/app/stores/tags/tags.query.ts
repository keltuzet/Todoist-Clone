import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { map } from 'rxjs/operators';
import { TagsStore, TagsState } from './tags.store';

@Injectable({ providedIn: 'root' })
export class TagsQuery extends QueryEntity<TagsState> {
  all$ = this.selectAll();
  hashMap$ = this.selectAll({ asObject: true });
  shared$ = this.all$.pipe(map((tags) => tags.filter((tag) => tag.isShared)));
  unshared$ = this.all$.pipe(map((tags) => tags.filter((tag) => !tag.isShared)));

  constructor(protected store: TagsStore) {
    super(store);
  }
}
