import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingCalendarComponent } from './upcoming-calendar.component';

describe('UpcomingCalendarComponent', () => {
  let component: UpcomingCalendarComponent;
  let fixture: ComponentFixture<UpcomingCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
