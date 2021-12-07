import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextPrevButtonComponent } from './next-prev-button.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [NextPrevButtonComponent],
  imports: [AngularSvgIconModule],
  exports: [NextPrevButtonComponent],
})
export class NextPrevButtonModule {}
