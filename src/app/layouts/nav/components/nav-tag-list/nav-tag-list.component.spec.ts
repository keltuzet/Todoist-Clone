import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTagListComponent } from './nav-tag-list.component';

describe('NavTagListComponent', () => {
  let component: NavTagListComponent;
  let fixture: ComponentFixture<NavTagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTagListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
