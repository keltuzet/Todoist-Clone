import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Tag } from '@stores/tags';
import { UnsubscribeService } from '@shared/services';
import { TagsQuery } from '@stores/tags';
import { takeUntil } from 'rxjs/operators';
import { NavTagMenuComponent } from '../nav-tag-menu/nav-tag-menu.component';

@Component({
  selector: 't-nav-tag-list',
  templateUrl: './nav-tag-list.component.html',
  styleUrls: ['./nav-tag-list.component.scss'],
  providers: [UnsubscribeService],
})
export class NavTagListComponent implements OnInit {
  menu = NavTagMenuComponent;
  unsharedTags: Tag[];
  sharedTags: Tag[];

  constructor(
    private tagsQuery: TagsQuery,
    private changeDetectorRef: ChangeDetectorRef,
    private unsubscribe: UnsubscribeService,
  ) {}

  ngOnInit(): void {
    this.tagsQuery.unshared$.pipe(takeUntil(this.unsubscribe)).subscribe((tags) => {
      this.unsharedTags = tags;
      this.changeDetectorRef.markForCheck();
    });
    this.tagsQuery.shared$.pipe(takeUntil(this.unsubscribe)).subscribe((tags) => {
      this.sharedTags = tags;
      this.changeDetectorRef.markForCheck();
    });
  }

  trackyBy(index: number, item: Tag): string {
    return item.id;
  }

  drop(event: CdkDragDrop<Tag[]>, list: Tag[]): void {
    moveItemInArray(list, event.previousIndex, event.currentIndex);
  }
}
