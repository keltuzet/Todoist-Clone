import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApplicationStateService } from './application-state.service';
import { ProductComponent } from './product.component';

@Component({
  selector: 'app-product-mobile',
  templateUrl: './product.component.mobile.html',
  styleUrls: ['./product.component.mobile.scss'],
})
export class ProductMobileComponent extends ProductComponent {
  constructor(router: Router, sanitizer: DomSanitizer, applicationStateService: ApplicationStateService) {
    super(router, sanitizer, applicationStateService);
  }
}
