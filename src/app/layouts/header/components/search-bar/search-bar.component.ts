import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedPosition, ConnectionPositionPair, Overlay } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, filter, map, startWith, switchMap, tap } from 'rxjs/operators';
import { getSearchBarOverlayOptions } from './search-bar-overlay.const';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements OnInit {
  searchControl = new FormControl('');
  displayPanel$ = new BehaviorSubject<boolean>(false);
  searchResults$: Observable<string[]>;
  isSearchInpEmpty$: Observable<boolean>;

  readonly overlayOptions = getSearchBarOverlayOptions(this.overlay);

  @ViewChild('searchBarWrap') private searchBarWrap: ElementRef<HTMLDivElement>;

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private overlay: Overlay,
  ) {}

  ngOnInit(): void {
    this.isSearchInpEmpty$ = this.searchControl.valueChanges.pipe(
      startWith(this.searchControl.value),
      tap(console.log),
      map((val) => !val?.trim()),
    );

    this.searchResults$ = this.isSearchInpEmpty$.pipe(
      filter(isEmpty => {
        console.log(isEmpty);
        return !isEmpty
      }),
      switchMap(() => this.searchService.search(this.searchControl.value)),
    )
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
}
