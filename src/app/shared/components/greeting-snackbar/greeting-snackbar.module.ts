import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingSnackbarComponent } from './greeting-snackbar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [GreetingSnackbarComponent],
  imports: [AngularSvgIconModule],
  exports: [GreetingSnackbarComponent],
})
export class GreetingSnackbarModule {}
