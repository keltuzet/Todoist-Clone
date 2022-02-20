import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsMenuComponent } from './settings-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgxLetDirectiveModule } from 'ngx-let-directive';

@NgModule({
  declarations: [SettingsMenuComponent],
  imports: [CommonModule, AngularSvgIconModule, NgxLetDirectiveModule],
  exports: [SettingsMenuComponent],
})
export class SettingsMenuModule {}
