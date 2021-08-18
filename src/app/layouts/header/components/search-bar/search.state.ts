import { Injectable } from '@angular/core';
import { Query, Store } from '@datorama/akita';
import { initialLoadState, LoadState } from '@shared/models/load-state.model';
import { SearchResult } from './search.model';

type State = {
  searchResults: SearchResult[];
  searchLoadState: LoadState;
  recentSearches: string[];
  recentViewedSearchResults: SearchResult[];
};

const initialState: State = {
  searchResults: [],
  searchLoadState: { ...initialLoadState },
  recentSearches: [],
  recentViewedSearchResults: []
}

@Injectable({ providedIn: 'root' })
export class SearchStore extends Store<State> {
  constructor() {
    super(initialState, { name: 'search' });
  }
}

@Injectable({ providedIn: 'root' })
export class SearchQuery extends Query<State> {
  constructor(protected store: SearchStore) {
    super(store);
  }
}
