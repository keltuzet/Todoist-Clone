import { Component, ChangeDetectionStrategy, Inject, HostBinding } from '@angular/core';
import { SNACK_BAR_DATA } from '@features/snackbar/snackbar-config';
import { SnackBarRef } from '@features/snackbar/snackbar-ref';
import { Themes } from '@shared/enums';

export interface GreetingSnackbarDataModel {
  message: string;
  theme?: Themes;
}

@Component({
  selector: 't-greeting-snackbar',
  templateUrl: './greeting-snackbar.component.html',
  styleUrls: ['./greeting-snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GreetingSnackbarComponent {
  @HostBinding('class') get theme(): string {
    return this.data?.theme || Themes.Dark;
  }

  constructor(private snackbarRef: SnackBarRef, @Inject(SNACK_BAR_DATA) public data: GreetingSnackbarDataModel) {}

  close(): void {
    this.snackbarRef.dismissWithAction();
  }
}
