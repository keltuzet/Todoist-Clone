import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthQuery, AuthService } from '@auth/stores';
import { Dialog } from '@features/dialog/dialog.service';
import { HelpMenuComponent } from '../help-menu/help-menu.component';
import { ProductivityMenuComponent } from '../productivity-menu/productivity-menu.component';
import { QuickAddTodoDialogComponent } from '../quick-add-todo-dialog/quick-add-todo-dialog.component';

@Component({
  selector: 't-header-extra-toolbar',
  templateUrl: './header-extra-toolbar.component.html',
  styleUrls: ['./header-extra-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderExtraToolbarComponent {
  readonly productivityMenu = ProductivityMenuComponent;
  readonly helpMenu = HelpMenuComponent;
  readonly userProfile$ = this.authQuery.select('profile');

  constructor(private dialog: Dialog, private authQuery: AuthQuery, private authService: AuthService) {}

  quickAddTodo(): void {
    const dialogRef = this.dialog.open(QuickAddTodoDialogComponent, {
      maxWidth: '550px',
      hasBackdrop: true,
    });
  }
}
