import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-nav-filter-list',
  templateUrl: './nav-filter-list.component.html',
  styleUrls: ['./nav-filter-list.component.scss'],
})
export class NavFilterListComponent implements OnInit {
  filterList$ = of([
    {
      title: 'Назначенное мне',
      color: '#ff8d85',
      count: 13,
    },
    {
      title: 'Нет срока выполнения',
      color: '#6accbc',
    },
  ]);

  constructor() {}

  ngOnInit(): void {}

  filterTrackyBy(index: number, item: any) {
    return index;
  }
}
