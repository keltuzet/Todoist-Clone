import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ExpansionPanelComponent } from './expansion-panel.component';
import { ExpansionPanelHeaderComponent } from './components/expansion-panel-header/expansion-panel-header.component';
import { ExpansionPanelBodyComponent } from './components/expansion-panel-body/expansion-panel-body.component';

@NgModule({
  declarations: [ExpansionPanelComponent, ExpansionPanelHeaderComponent, ExpansionPanelBodyComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [ExpansionPanelComponent, ExpansionPanelHeaderComponent, ExpansionPanelBodyComponent],
})
export class ExpansionPanelModule {}
