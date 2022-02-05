import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconCatalogComponent } from './icon-catalog.component';

const routes: Routes = [{ path: '', component: IconCatalogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconCatalogRoutingModule {}
