import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutForDirective } from './layout-for.directive';

@NgModule({
  declarations: [LayoutForDirective],
  imports: [CommonModule],
  exports: [LayoutForDirective],
})
export class LayoutForModule {}
