import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchQuery } from '../search-bar/search.state';

@Component({
  selector: 't-recent-search-result-list',
  templateUrl: './recent-search-result-list.component.html',
  styleUrls: ['./recent-search-result-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentSearchResultListComponent {
  recentViewedSearchResults$ = this.searchQuery.select('recentViewedSearchResults');

  constructor(private searchQuery: SearchQuery) {}
}
