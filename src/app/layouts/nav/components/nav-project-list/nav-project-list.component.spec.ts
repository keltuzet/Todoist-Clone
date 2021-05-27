import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProjectListComponent } from './nav-project-list.component';

describe('NavProjectListComponent', () => {
  let component: NavProjectListComponent;
  let fixture: ComponentFixture<NavProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavProjectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
