import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { arrayRemove } from '@datorama/akita';
import { SearchStore, SearchQuery } from '../search-bar/search.state';

@Component({
  selector: 't-recent-search-list',
  templateUrl: './recent-search-list.component.html',
  styleUrls: ['./recent-search-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentSearchListComponent {
  @Output() searchSelect = new EventEmitter<string>();
  readonly list$ = this.searchQuery.select('recentSearches');

  constructor(private searchStore: SearchStore, private searchQuery: SearchQuery) {}

  remove(removeSearch: string): void {
    this.searchStore.update((state) => ({
      recentSearches: arrayRemove(state.recentSearches, removeSearch),
    }));
  }

  reset(): void {
    this.searchStore.update({ recentSearches: [] });
  }
}
