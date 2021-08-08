import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { isMobile } from '@shared/const';
import { ApplicationStateService } from './application-state.service';
import { ProductComponentModel } from './product.component.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export abstract class ProductComponent implements OnInit {
  private model: ProductComponentModel;
  public myViewModel: ProductComponentModel;

  public isMobileResolution: boolean;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private applicationStateService: ApplicationStateService,
  ) {
    this.model = new ProductComponentModel(sanitizer);
    this.myViewModel = new ProductComponentModel(sanitizer);

    this.loadProduct();
    this.updateView();

    this.isMobileResolution = applicationStateService.getIsMobileResolution();
  }

  ngOnInit(): void {
    console.log('Products are initialized!');
  }

  private loadProduct(): void {
    this.model.name = 'Watch';
    this.model.description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum?';
    this.model.imageUrl = '/assets/img/jpg/cat.jpg';
  }

  private updateView(): void {
    this.myViewModel = this.model.clone();
  }
}
