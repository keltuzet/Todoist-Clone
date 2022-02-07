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
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';

import { TabDirective } from '../../directives/tab.directive';
import { trackByIndex } from '@shared/utils';

@Component({
  selector: 't-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterViewInit, OnDestroy {
  readonly select$ = new BehaviorSubject<number>(0);
  readonly trackByIndex = trackByIndex;

  @Input() set selectedTab(index: number) {
    this.select$.next(index);
  }
  labels$: Observable<string[]>;
  selectedTabIndex$: Observable<number>;

  @ContentChildren(TabDirective) private tabs: QueryList<TabDirective>;
  @ViewChild('container', { read: ViewContainerRef }) private body: ViewContainerRef;
  private unsubscriber = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const contentChanges: Observable<QueryList<TabDirective>> = this.tabs.changes.pipe(startWith(this.tabs));

    this.labels$ = contentChanges.pipe(
      switchMap(() => combineLatest(this.tabs.map(tab => tab.getLabel()))),
      map((labels: string[]) => labels),
    );

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
