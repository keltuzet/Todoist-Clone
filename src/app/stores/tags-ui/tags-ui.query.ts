import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TagsUiStore, TagsUiState } from './tags-ui.store';

@Injectable({ providedIn: 'root' })
export class TagsUiQuery extends QueryEntity<TagsUiState> {
  constructor(protected store: TagsUiStore) {
    super(store);
  }
}
