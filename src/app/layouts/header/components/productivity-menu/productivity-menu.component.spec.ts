import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityMenuComponent } from './productivity-menu.component';

describe('ProductivityMenuComponent', () => {
  let component: ProductivityMenuComponent;
  let fixture: ComponentFixture<ProductivityMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductivityMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivityMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
