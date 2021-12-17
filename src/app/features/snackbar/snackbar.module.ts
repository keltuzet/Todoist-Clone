import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarContainerComponent } from './components';
import { SnackbarService } from './services/snackbar.service';

@NgModule({
  declarations: [SnackbarContainerComponent],
  imports: [CommonModule],
  providers: [SnackbarService]
})
export class SnackbarModule {}
