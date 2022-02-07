import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ButtonModule } from '@features/button/button.module';
import { ConfirmRemoveDialogComponent } from './confirm-remove-dialog/confirm-remove-dialog.component';

@NgModule({
  declarations: [ConfirmRemoveDialogComponent],
  imports: [CommonModule, AngularSvgIconModule, ButtonModule],
  exports: [ConfirmRemoveDialogComponent],
})
export class SharedDialogsModule {}
