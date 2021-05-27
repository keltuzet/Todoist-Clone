import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFavoritesListComponent } from './nav-favorites-list.component';

describe('NavFavoritesListComponent', () => {
  let component: NavFavoritesListComponent;
  let fixture: ComponentFixture<NavFavoritesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavFavoritesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFavoritesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
