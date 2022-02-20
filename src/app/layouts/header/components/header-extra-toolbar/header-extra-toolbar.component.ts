import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthQuery, AuthService } from '@auth/stores';
import { Dialog } from '@features/dialog/dialog.service';
import { SettingsMenuComponent } from '@shared/components';
import { HelpMenuComponent } from '../help-menu/help-menu.component';
import { ProductivityMenuComponent } from '../productivity-menu/productivity-menu.component';
import { QuickCreateTodoDialogComponent } from '../quick-create-todo-dialog/quick-create-todo-dialog.component';

@Component({
  selector: 't-header-extra-toolbar',
  templateUrl: './header-extra-toolbar.component.html',
  styleUrls: ['./header-extra-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderExtraToolbarComponent {
  readonly productivityMenu = ProductivityMenuComponent;
  readonly helpMenu = HelpMenuComponent;
  readonly settingsMenu = SettingsMenuComponent;
  readonly userProfile$ = this.authQuery.select('profile');

  constructor(private dialog: Dialog, private authQuery: AuthQuery, private authService: AuthService) {}

  quickAddTodo(): void {
    const dialogRef = this.dialog.open(QuickCreateTodoDialogComponent, {
      maxWidth: '550px',
      hasBackdrop: true,
    });
  }
}
