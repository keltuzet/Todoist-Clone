import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectIconPipe } from './project-icon.pipe';

@NgModule({
  declarations: [ProjectIconPipe],
  imports: [CommonModule],
  exports: [ProjectIconPipe],
})
export class ProjectIconModule {}
