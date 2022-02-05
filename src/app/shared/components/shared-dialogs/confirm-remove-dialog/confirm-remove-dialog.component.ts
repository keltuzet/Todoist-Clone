import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogRef } from '@features/dialog/dialog-ref';

@Component({
  selector: 't-confirm-remove-dialog',
  templateUrl: './confirm-remove-dialog.component.html',
  styleUrls: ['./confirm-remove-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmRemoveDialogComponent {
  constructor(private dialogRef: DialogRef<boolean>) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close(false);
  }
}
