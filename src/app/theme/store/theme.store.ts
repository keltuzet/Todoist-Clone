import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Theme } from '../theme.model';
import { THEME_LIST } from '../themes-list.const';

export interface ThemeState extends EntityState<Theme>, ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'theme' })
export class ThemeStore extends EntityStore<ThemeState> {
  constructor() {
    super();
  }
}
