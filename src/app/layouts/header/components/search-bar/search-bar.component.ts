import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  ConnectedPosition,
  ConnectionPositionPair,
  Overlay,
} from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, NavigationStart, Router } from '@angular/router';
import { arrayAdd } from '@datorama/akita';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, filter, map, startWith, switchMap, tap } from 'rxjs/operators';
import { SearchResult } from './search.model';
import { getSearchBarOverlayOptions } from './search-bar-overlay.const';
import { SearchService } from './search.service';
import { SearchQuery, SearchStore } from './search.state';

@Component({
  selector: 't-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements OnInit {
  searchControl = new FormControl('');
  displayPanel$ = new BehaviorSubject<boolean>(false);
  searchResults$: Observable<SearchResult[]>;
  recentSearches$ = this.searchQuery.select('recentSearches');
  recentViewedSearchResults$ = this.searchQuery.select('recentViewedSearchResults');
  isSearchInpEmpty$: Observable<boolean>;
  search$ = new Subject<void>();
  searchText$ = new BehaviorSubject<string>('');

  readonly overlayOptions = getSearchBarOverlayOptions(this.overlay);

  @ViewChild('searchBarWrap') private searchBarWrap: ElementRef<HTMLDivElement>;

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private overlay: Overlay,
    private searchStore: SearchStore,
    private searchQuery: SearchQuery,
  ) {}

  ngOnInit(): void {
    this.isSearchInpEmpty$ = this.searchControl.valueChanges.pipe(
      startWith(this.searchControl.value),
      map((val) => !val.trim()),
    );

    this.searchControl.valueChanges.pipe().subscribe(this.searchText$);

    this.searchResults$ = this.searchText$.pipe(
      filter(text => Boolean(text.trim())),
      switchMap((text) => this.searchService.search(text.trim())),
    );
  }

  handleInputFocus(): void {
    this.expand();
  }

  handleInputBlur(): void {
    this.compact();
  }

  expand(): void {
    if (this.displayPanel$.value) return;
    this.searchBarWrap.nativeElement.classList.add('focused');
    this.displayPanel$.next(true);
  }

  compact(): void {
    if (!this.displayPanel$.value) return;
    this.searchBarWrap.nativeElement.classList.remove('focused');
    this.displayPanel$.next(false);
  }

  reset(): void {
    this.searchControl.setValue('');
    this.compact();
  }

  search(): void {
    const searchText = this.searchControl.value;
    if (!searchText?.trim()) return;

    this.searchStore.update((state) => ({
      recentSearches: Array.from(new Set(state.recentSearches.concat(searchText))),
    }));
  }

  setValue(text: string): void {
    console.log(text);
    this.searchControl.setValue(text);
  }
}
