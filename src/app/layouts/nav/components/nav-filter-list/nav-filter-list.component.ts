import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't-nav-filter-list',
  templateUrl: './nav-filter-list.component.html',
  styleUrls: ['./nav-filter-list.component.scss'],
})
export class NavFilterListComponent implements OnInit {
  filterList = [
    {
      title: 'Назначенное мне',
      color: '#ff8d85',
      count: 13,
    },
    {
      title: 'Нет срока выполнения',
      color: '#6accbc',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  trackyBy(index: number, item: any): number {
    return index;
  }

  drop(event: CdkDragDrop<any[]>): void {
    moveItemInArray(this.filterList, event.previousIndex, event.currentIndex);
  }
}
