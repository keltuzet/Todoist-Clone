import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgxLetDirectiveModule } from 'ngx-let-directive';
import { ProjectActionsMenuComponent } from './project-actions-menu.component';
import { DialogModule } from '@features/dialog';
import { EditProjectDialogComponent } from './edit-project-dialog/edit-project-dialog.component';

@NgModule({
  declarations: [ProjectActionsMenuComponent, EditProjectDialogComponent],
  imports: [CommonModule, AngularSvgIconModule, NgxLetDirectiveModule, DialogModule],
  exports: [ProjectActionsMenuComponent, EditProjectDialogComponent],
})
export class ProjectActionsMenuModule {}
