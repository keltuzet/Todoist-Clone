import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconCatalogRoutingModule } from './icon-catalog-routing.module';
import { IconCatalogComponent } from './icon-catalog.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [IconCatalogComponent],
  imports: [CommonModule, IconCatalogRoutingModule, AngularSvgIconModule],
})
export class IconCatalogModule {}
