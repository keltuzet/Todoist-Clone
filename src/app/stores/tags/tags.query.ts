import { Injectable } from '@angular/core';
import { EntityUIQuery, HashMap, QueryEntity } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { Tag } from './tag.model';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { TagsStore, TagsState, TagsUIState, TagPageUI } from './tags.store';

@Injectable({ providedIn: 'root' })
export class TagsQuery extends QueryEntity<TagsState> {
  readonly all$: Observable<Tag[]> = this.selectAll();
  readonly hashMap$: Observable<HashMap<Tag>> = this.selectAll({ asObject: true });
  readonly shared$: Observable<Tag[]> = this.all$.pipe(map(tags => tags.filter(tag => tag.isShared)));
  readonly unshared$: Observable<Tag[]> = this.all$.pipe(map(tags => tags.filter(tag => !tag.isShared)));
  ui: EntityUIQuery<TagsUIState>;

  constructor(protected store: TagsStore, private routerQuery: RouterQuery) {
    super(store);
    this.createUIQuery();
  }

  selectRouteTag(): Observable<Tag> {
    return this.routerQuery.selectParams('label').pipe(
      switchMap((tagLabel: string) => {
        return this.selectEntity((tag: Tag) => tag.title === tagLabel);
      }),
      filter(project => Boolean(project)),
    );
  }

  selectRouteTagUIState(): Observable<TagPageUI> {
    return this.routerQuery.selectParams('label').pipe(
      switchMap((tagLabel: string) => {
        return this.selectEntity((tag: Tag) => tag.title === tagLabel).pipe(
          switchMap(tag => this.ui.selectEntity(tag.id)),
        );
      }),
    );
  }
}
