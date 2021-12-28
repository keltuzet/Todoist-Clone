import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ShowOnBreakpointModule } from '@shared/directives';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, ShowOnBreakpointModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
