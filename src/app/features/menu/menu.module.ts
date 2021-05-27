import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components';
import { MenuTriggerDirective } from './directives/menu-trigger.directive';
import { MenuCloseDirective } from './directives/menu-close.directive';

@NgModule({
  declarations: [MenuComponent, MenuTriggerDirective, MenuCloseDirective],
  imports: [CommonModule],
  exports: [MenuComponent, MenuTriggerDirective, MenuCloseDirective],
})
export class MenuModule {}
