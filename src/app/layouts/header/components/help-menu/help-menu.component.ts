import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  templateUrl: './help-menu.component.html',
  styleUrls: ['./help-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpMenuComponent implements OnInit {
  @HostBinding('class.menu-list-v2') readonly menuListV2Class = true;

  constructor() {}

  ngOnInit(): void {}
}
