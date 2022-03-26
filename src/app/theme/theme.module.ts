import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchModule } from '@features/switch';

import { ThemeRoutingModule } from './theme-routing.module';
import { ThemeComponent } from './theme.component';
import { ThemeViewCardComponent } from './components';
import { NgxLetDirectiveModule } from 'ngx-let-directive';

@NgModule({
  declarations: [ThemeComponent, ThemeViewCardComponent],
  imports: [CommonModule, ThemeRoutingModule, SwitchModule, NgxLetDirectiveModule],
})
export class ThemeModule {}
