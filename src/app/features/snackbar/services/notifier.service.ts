import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  constructor(private snackbar: SnackbarService) {}

  showActionCompletedDetails(): void {}
}
