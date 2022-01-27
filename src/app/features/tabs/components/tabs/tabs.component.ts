import {
  Component,
  ChangeDetectionStrategy,
  ContentChildren,
  AfterViewInit,
  QueryList,
  ViewChild,
  ViewContainerRef,
  ChangeDetectorRef,
  Input,
  OnDestroy,
} from '@angular/core';
import { TabDirective } from '@features/tabs/directives/tab.directive';
import { trackByIndex } from '@shared/utils';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 't-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterViewInit, OnDestroy {
  readonly select$ = new BehaviorSubject<number>(0);
  readonly labels$ = new BehaviorSubject<string[]>([]);
  readonly trackByIndex = trackByIndex;
  @Input() set selectedTab(index: number) {
    this.select$.next(index);
  }
  selectedTabIndex$: Observable<number>;

  @ContentChildren(TabDirective) private tabs: QueryList<TabDirective>;
  @ViewChild('container', { read: ViewContainerRef }) private body: ViewContainerRef;
  private unsubscriber = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const contentChanges: Observable<QueryList<TabDirective>> = this.tabs.changes.pipe(startWith(this.tabs));
    contentChanges
      .pipe(
        takeUntil(this.unsubscriber),
        tap(() => this.labels$.next(this.tabs.map(tab => tab.label))),
      )
      .subscribe();

    this.selectedTabIndex$ = this.select$.asObservable().pipe(
      map(() => {
        this.body.clear();
        const index = this.select$.value < this.tabs.length ? this.select$.value : 0;
        const selectedTab = this.tabs.get(index);
        if (selectedTab) this.body.createEmbeddedView(selectedTab.template);
        return index;
      }),
    );

    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  select(index: number): void {
    if (this.select$.value === index) return;
    this.select$.next(index);
  }
}
