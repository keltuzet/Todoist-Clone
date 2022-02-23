import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevComponent } from './dev.component';
import { OverlayExampleComponent } from './overlay-example/overlay-example.component';
import { SwitchModule } from '@features/switch';

@NgModule({
  declarations: [DevComponent, OverlayExampleComponent],
  imports: [CommonModule, SwitchModule],
  exports: [DevComponent, OverlayExampleComponent],
})
export class DevModule {}
