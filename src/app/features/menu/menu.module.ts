import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components';
import { MenuTriggerDirective } from './directives/menu-trigger.directive';
import { MenuCloseDirective } from './directives/menu-close.directive';
import { MenuDividerDirective } from './directives/menu-divider.directive';
import { MenuItemDirective } from './directives/menu-item.directive';
import { MenuListDirective } from './directives/menu-list.directive';

@NgModule({
  declarations: [MenuComponent, MenuTriggerDirective, MenuCloseDirective, MenuDividerDirective, MenuItemDirective, MenuListDirective],
  imports: [CommonModule],
  exports: [MenuComponent, MenuTriggerDirective, MenuCloseDirective, MenuDividerDirective, MenuItemDirective, MenuListDirective],
})
export class MenuModule {}
