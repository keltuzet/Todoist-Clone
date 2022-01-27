import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 't-productivity-menu',
  templateUrl: './productivity-menu.component.html',
  styleUrls: ['./productivity-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductivityMenuComponent implements OnInit {
  @HostBinding('class.menu') get menuClass(): true {
    return true;
  }

  constructor() {}

  ngOnInit(): void {}
}
