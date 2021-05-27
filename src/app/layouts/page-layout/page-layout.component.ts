import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { APP_NAVS } from './app-nav.const';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
