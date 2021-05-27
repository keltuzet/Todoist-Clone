import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { RadioButtonComponent } from './components';

@NgModule({
  declarations: [RadioButtonComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [RadioButtonComponent],
})
export class RadioButtonModule {}
