import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar.component';
import { SidebarResizerDirective } from './sidebar-resizer.directive';

@NgModule({
  declarations: [SidebarComponent, SidebarResizerDirective],
  imports: [CommonModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
