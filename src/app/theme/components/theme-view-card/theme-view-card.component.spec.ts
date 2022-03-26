import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeViewCardComponent } from './theme-view-card.component';

describe('ThemeViewCardComponent', () => {
  let component: ThemeViewCardComponent;
  let fixture: ComponentFixture<ThemeViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeViewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
