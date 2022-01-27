import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { TabDirective } from './directives/tab.directive';
import { NgLetModule } from 'ng-let';

@NgModule({
  declarations: [TabsComponent, TabComponent, TabDirective],
  imports: [CommonModule, NgLetModule],
  exports: [TabsComponent, TabComponent, TabDirective],
})
export class TabsModule {}
