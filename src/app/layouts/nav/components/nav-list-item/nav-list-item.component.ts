import { ComponentType } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.scss'],
})
export class NavListItemComponent implements OnInit {
  @Input() icon = 'small-circle';
  @Input() color: string;
  @Input() todoCount: number;
  @Input() hasMenu: boolean;
  @Input() menu: ComponentType<any>;

  constructor() {}

  ngOnInit(): void {}
}
