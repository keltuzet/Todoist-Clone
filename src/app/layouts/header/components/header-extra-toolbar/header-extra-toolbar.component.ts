import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  productivityMenu = ProductivityMenuComponent;
  helpMenu = HelpMenuComponent;

  constructor(private dialog: Dialog) {}

  quickAddTodo(): void {
    const dialogRef = this.dialog.open(QuickAddTodoDialogComponent, {
      maxWidth: '550px',
      hasBackdrop: true,
    });
  }
}
