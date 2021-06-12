import { Component, OnInit } from '@angular/core';

import { TodoTag } from '@shared/models';
import { TagsQuery } from '@stores/tags';
import { NavTagMenuComponent } from '../nav-tag-menu/nav-tag-menu.component';

@Component({
  selector: 'app-nav-tag-list',
  templateUrl: './nav-tag-list.component.html',
  styleUrls: ['./nav-tag-list.component.scss'],
})
export class NavTagListComponent implements OnInit {
  menu = NavTagMenuComponent;
  unsharedTags$ = this.tagsQuery.unshared$;
  sharedTags$ = this.tagsQuery.shared$;

  constructor(private tagsQuery: TagsQuery) {}

  ngOnInit(): void {}

  tagTrackyBy(_: number, item: TodoTag) {
    return item.id;
  }
}
