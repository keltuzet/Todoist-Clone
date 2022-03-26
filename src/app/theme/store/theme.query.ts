import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ThemeStore, ThemeState } from './theme.store';

@Injectable({ providedIn: 'root' })
export class ThemeQuery extends QueryEntity<ThemeState> {
  constructor(protected store: ThemeStore) {
    super(store);
  }
}
