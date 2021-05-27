import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTagMenuComponent } from './nav-tag-menu.component';

describe('NavTagMenuComponent', () => {
  let component: NavTagMenuComponent;
  let fixture: ComponentFixture<NavTagMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTagMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTagMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
