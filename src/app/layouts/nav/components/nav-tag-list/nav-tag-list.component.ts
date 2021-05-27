import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { NavTagMenuComponent } from '../nav-tag-menu/nav-tag-menu.component';

@Component({
  selector: 'app-nav-tag-list',
  templateUrl: './nav-tag-list.component.html',
  styleUrls: ['./nav-tag-list.component.scss'],
})
export class NavTagListComponent implements OnInit {
  menu = NavTagMenuComponent;
  tags$ = of([
    {
      title: 'Learn',
      color: '#ff8d85',
      count: 13,
    },
    {
      title: 'Meta_tag',
      color: '#96c3eb',
    },
  ]);

  constructor() {}

  ngOnInit(): void {}

  tagTrackyBy(index: number, item: any) {
    return index;
  }
}
