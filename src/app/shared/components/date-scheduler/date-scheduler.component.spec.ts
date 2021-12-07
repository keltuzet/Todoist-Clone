import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSchedulerComponent } from './date-scheduler.component';

describe('DateSchedulerComponent', () => {
  let component: DateSchedulerComponent;
  let fixture: ComponentFixture<DateSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateSchedulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
