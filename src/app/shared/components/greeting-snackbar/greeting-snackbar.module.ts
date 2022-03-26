import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { GreetingSnackbarComponent } from './greeting-snackbar.component';

@NgModule({
  declarations: [GreetingSnackbarComponent],
  imports: [AngularSvgIconModule],
  exports: [GreetingSnackbarComponent],
})
export class GreetingSnackbarModule {}
