import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@auth/stores';
import { MeQuery } from '@stores/me';
import { MenuRef } from 'todoist-menu';

@Component({
  selector: 't-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsMenuComponent implements OnInit {
  readonly me$ = this.me.query.select('profile');

  constructor(private me: MeQuery, private authService: AuthService, private menuRef: MenuRef) {}

  ngOnInit(): void {}

  signOut(): void {
    this.authService.signOut();
    this.menuRef.close();
  }
}
