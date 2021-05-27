import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFilterListComponent } from './nav-filter-list.component';

describe('NavFilterListComponent', () => {
  let component: NavFilterListComponent;
  let fixture: ComponentFixture<NavFilterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFilterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
