import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSearchResultListComponent } from './recent-search-result-list.component';

describe('RecentSearchResultListComponent', () => {
  let component: RecentSearchResultListComponent;
  let fixture: ComponentFixture<RecentSearchResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentSearchResultListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSearchResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
