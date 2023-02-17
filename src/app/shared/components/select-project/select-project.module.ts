import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SelectProjectButtonComponent } from './select-project-button/select-project-button.component';
import { SelectProjectMenuComponent } from './select-project-menu/select-project-menu.component';

@NgModule({
  declarations: [SelectProjectButtonComponent, SelectProjectMenuComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [SelectProjectButtonComponent, SelectProjectMenuComponent],
})
export class SelectProjectModule {}
