import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GroupTodosBy, SortTodosBy } from '@stores/todos';
import { TagPageUI, TagsQuery, TagsStore } from '@stores/tags';
import { map, take } from 'rxjs/operators';
import { GroupTodosByComponent } from '../group-todos-by/group-todos-by.component';
import { SortTodosByComponent } from '../sort-todos/sort-todos.component';

@Component({
  selector: 't-display-todos-menu',
  templateUrl: './display-todos-menu.component.html',
  styleUrls: ['./display-todos-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayTodosMenuComponent implements OnInit {
  menuGroupBy = GroupTodosByComponent;
  menuSortBy = SortTodosByComponent;
  uiState$ = this.tagsQuery.selectRouteTagUIState();
  groupBy$ = this.uiState$.pipe(map((state) => state.groupedBy));
  sortBy$ = this.uiState$.pipe(map((state) => state.sortedBy));
  isFilterApplied$ = this.uiState$.pipe(
    map((state) => {
      return state.groupedBy !== GroupTodosBy.Default || state.sortedBy !== SortTodosBy.Default;
    }),
  );

  constructor(private tagsQuery: TagsQuery, private tagsStore: TagsStore) {}

  ngOnInit(): void {}

  selectGroupBy(groupedBy: GroupTodosBy): void {
    if (!groupedBy) return;
    this.uiState$.pipe(take(1)).subscribe((state) => {
      this.tagsStore.ui.update(state.id, { groupedBy });
    });
  }

  selectSortBy(sortedBy: SortTodosBy): void {
    if (!sortedBy) return;
    this.uiState$.pipe(take(1)).subscribe((state: TagPageUI) => {
      this.tagsStore.ui.update(state.id, { sortedBy });
    });
  }

  resetFilters(): void {
    this.uiState$.pipe(take(1)).subscribe((state: TagPageUI) => {
      this.tagsStore.ui.update(state.id, { sortedBy: SortTodosBy.Default, groupedBy: GroupTodosBy.Default });
    });
  }
}
