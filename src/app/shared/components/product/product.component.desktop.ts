import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApplicationStateService } from './application-state.service';
import { ProductComponent } from './product.component';

@Component({
  selector: 'app-product-desktop',
  templateUrl: './product.component.desktop.html',
  styleUrls: ['./product.component.desktop.scss'],
})
export class ProductDesktopComponent extends ProductComponent {
  constructor(router: Router, sanitizer: DomSanitizer, applicationStateService: ApplicationStateService) {
    super(router, sanitizer, applicationStateService);
  }
}
