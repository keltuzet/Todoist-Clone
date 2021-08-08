import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ApplicationStateService } from './application-state.service';
import { ProductDesktopComponent } from './product.component.desktop';
import { ProductMobileComponent } from './product.component.mobile';
import { LayoutForModule } from '@shared/directives';

@NgModule({
  declarations: [ProductComponent as any, ProductDesktopComponent, ProductMobileComponent],
  imports: [CommonModule, LayoutForModule],
  exports: [ProductComponent as any],
  providers: [ApplicationStateService]
})
export class ProductModule {}
