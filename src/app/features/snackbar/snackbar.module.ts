import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarContainerComponent } from './components';
import { SnackbarService } from './services/snackbar.service';
import { ActionCompletedDetailsComponent } from './components/action-completed-details/action-completed-details.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [SnackbarContainerComponent, ActionCompletedDetailsComponent],
  imports: [CommonModule, AngularSvgIconModule],
  providers: [SnackbarService],
  exports: [ActionCompletedDetailsComponent],
})
export class SnackbarModule {}
