import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 't-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
