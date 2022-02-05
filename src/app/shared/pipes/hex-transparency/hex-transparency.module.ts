import { NgModule } from '@angular/core';
import { HexTransparencyPipe } from './hex-transparency.pipe';

@NgModule({
  declarations: [HexTransparencyPipe],
  exports: [HexTransparencyPipe],
})
export class HexTransparencyModule {}
