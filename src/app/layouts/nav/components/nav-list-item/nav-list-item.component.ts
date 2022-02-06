import { ComponentType } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 't-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.scss'],
})
export class NavListItemComponent implements OnInit {
  @Input() icon = 'small-circle';
  @Input() color: string;
  @Input() todoCount: number;
  @Input() hasMenu: boolean;
  @Input() menu: ComponentType<any>;
  @Output() actions = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
