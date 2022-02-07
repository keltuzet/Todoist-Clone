import { Injectable } from '@angular/core';
import { EntityUIQuery, HashMap, QueryEntity } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { TodoTag } from '@shared/models';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { TagsStore, TagsState, TagsUIState, TagPageUI } from './tags.store';

@Injectable({ providedIn: 'root' })
export class TagsQuery extends QueryEntity<TagsState> {
  readonly all$: Observable<TodoTag[]> = this.selectAll();
  readonly hashMap$: Observable<HashMap<TodoTag>> = this.selectAll({ asObject: true });
  readonly shared$: Observable<TodoTag[]> = this.all$.pipe(map(tags => tags.filter(tag => tag.isShared)));
  readonly unshared$: Observable<TodoTag[]> = this.all$.pipe(map(tags => tags.filter(tag => !tag.isShared)));
  ui: EntityUIQuery<TagsUIState>;

  constructor(protected store: TagsStore, private routerQuery: RouterQuery) {
    super(store);
    this.createUIQuery();
  }

  selectRouteTag(): Observable<TodoTag> {
    return this.routerQuery.selectParams('label').pipe(
      switchMap((tagLabel: string) => {
        return this.selectEntity((tag: TodoTag) => tag.title === tagLabel);
      }),
      filter(project => Boolean(project)),
    );
  }

  selectRouteTagUIState(): Observable<TagPageUI> {
    return this.routerQuery.selectParams('label').pipe(
      switchMap((tagLabel: string) => {
        return this.selectEntity((tag: TodoTag) => tag.title === tagLabel).pipe(
          switchMap(tag => this.ui.selectEntity(tag.id)),
        );
      }),
    );
  }
}
