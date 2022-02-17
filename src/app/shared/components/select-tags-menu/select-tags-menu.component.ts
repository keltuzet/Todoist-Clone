import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith, switchMap, take } from 'rxjs/operators';
import { MenuRef, MENU_DATA } from 'todoist-menu';

import { Tag } from '@stores/tags';
import { TagsQuery } from '@stores/tags';
import { TodosQuery, TodosService } from '@stores/todos';
import { FormControl } from '@angular/forms';

interface TagOption extends Tag {
  checked: boolean;
}

@Component({
  selector: 't-select-tags',
  templateUrl: './select-tags-menu.component.html',
  styleUrls: ['./select-tags-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectTagsMenuComponent {
  readonly hasAnyTags$ = this.tagsQuery.selectCount().pipe(map<number, boolean>(Boolean));
  readonly filterControl = new FormControl();
  readonly filter$ = this.filterControl.valueChanges.pipe(startWith(''));
  unsharedTags$: Observable<TagOption[]>;
  sharedTags$: Observable<TagOption[]>;
  tagIds$: Observable<string[]>;
  hasAnySharedTags$: Observable<boolean>;

  constructor(
    private tagsQuery: TagsQuery,
    private todosQuery: TodosQuery,
    private todosService: TodosService,
    private menuRef: MenuRef,
    @Inject(MENU_DATA) public todoId$: Observable<string>,
  ) {
    this.tagIds$ = this.todoId$.pipe(switchMap(id => this.todosQuery.selectEntity(id, 'tagIds')));
    this.unsharedTags$ = this.getTagOptions(this.tagsQuery.unshared$);
    this.sharedTags$ = this.getTagOptions(this.tagsQuery.shared$);
    this.hasAnySharedTags$ = this.sharedTags$.pipe(map(items => Boolean(items.length)));
  }

  private getTagOptions(tags$: Observable<Tag[]>): Observable<TagOption[]> {
    return combineLatest([tags$, this.tagIds$, this.filter$]).pipe(
      map(([tags, ids, filter]) => {
        const setIds = new Set(ids || []);
        return tags
          .filter(item => !filter || item.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
          .map(tag => ({ ...tag, checked: setIds.has(tag.id) }));
      }),
    );
  }

  updateTag(add: boolean, tagId: string): void {
    this.tagIds$
      .pipe(
        take(1),
        switchMap(tagIds =>
          this.todoId$.pipe(
            switchMap(todoId => {
              const set = new Set(tagIds);
              add ? set.add(tagId) : set.delete(tagId);
              return this.todosService.updateTodo(todoId, {
                tagIds: Array.from(set.values()),
              });
            }),
          ),
        ),
      )
      .subscribe();
  }
}
