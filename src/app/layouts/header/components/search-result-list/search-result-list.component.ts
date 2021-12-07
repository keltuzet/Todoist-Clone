import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { arrayAdd } from '@datorama/akita';
import { SpinnerService } from '@shared/services';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';
import { SearchResult } from '../search-bar/search.model';
import { SearchStore, SearchQuery } from '../search-bar/search.state';

@Component({
  selector: 't-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultListComponent {
  searchResults$ = this.searchQuery.select('searchResults');
  isSearching$ = this.searchQuery
    .select((state) => state.searchLoadState.processing)
    .pipe(
      tap((isProcessing) =>
        isProcessing
          ? this.spinnerService.show('search-result-spinner')
          : this.spinnerService.hide('search-result-spinner'),
      ),
    );
  @Input() emptyText = 'Ничего не найдено';

  constructor(
    private searchStore: SearchStore,
    private searchQuery: SearchQuery,
    private spinnerService: NgxSpinnerService,
  ) {}

  addToRecent(searchResult: SearchResult): void {
    this.searchStore.update((state) => {
      const hasSearchResult = state.recentViewedSearchResults.find(
        (item) => item.type === searchResult.type && item.src.id === searchResult.src.id,
      );

      if (hasSearchResult) return;

      return {
        recentViewedSearchResults: arrayAdd(state.recentViewedSearchResults, searchResult),
      };
    });
  }
}
