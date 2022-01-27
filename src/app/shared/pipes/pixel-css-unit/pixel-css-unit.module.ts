import { NgModule } from '@angular/core';
import { PixelCssUnitPipe } from './pixel-css-unit.pipe';

@NgModule({
  declarations: [PixelCssUnitPipe],
  exports: [PixelCssUnitPipe],
})
export class PixelCssUnitModule {}
