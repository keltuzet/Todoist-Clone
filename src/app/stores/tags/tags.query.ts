import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { TodoTag } from '@shared/models';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { TagsStore, TagsState } from './tags.store';

@Injectable({ providedIn: 'root' })
export class TagsQuery extends QueryEntity<TagsState> {
  all$ = this.selectAll();
  hashMap$ = this.selectAll({ asObject: true });
  shared$ = this.all$.pipe(map((tags) => tags.filter((tag) => tag.isShared)));
  unshared$ = this.all$.pipe(map((tags) => tags.filter((tag) => !tag.isShared)));

  constructor(protected store: TagsStore, private routerQuery: RouterQuery) {
    super(store);
  }

  selectSelectedTag(): Observable<TodoTag> {
    return this.routerQuery.selectParams('label').pipe(
      switchMap((tagLabel: string) => {
        return this.selectEntity((tag: TodoTag) => tag.title === tagLabel);
      }),
      filter((project) => Boolean(project)),
    );
  }
}
