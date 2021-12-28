import { NgModule } from '@angular/core';
import { ShowOnBreakpointDirective, ShowOnDesktopDirective } from './show-on-breakpoint.directive';

@NgModule({
  declarations: [ShowOnBreakpointDirective, ShowOnDesktopDirective],
  exports: [ShowOnBreakpointDirective, ShowOnDesktopDirective],
})
export class ShowOnBreakpointModule {}
