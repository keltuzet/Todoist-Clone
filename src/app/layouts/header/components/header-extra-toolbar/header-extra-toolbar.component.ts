import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 't-header-extra-toolbar',
  templateUrl: './header-extra-toolbar.component.html',
  styleUrls: ['./header-extra-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderExtraToolbarComponent {}
