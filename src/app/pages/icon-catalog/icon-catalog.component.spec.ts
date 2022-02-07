import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCatalogComponent } from './icon-catalog.component';

describe('IconCatalogComponent', () => {
  let component: IconCatalogComponent;
  let fixture: ComponentFixture<IconCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
