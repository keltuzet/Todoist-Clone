import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSchedulerInputComponent } from './date-scheduler-input.component';

describe('DateSchedulerInputComponent', () => {
  let component: DateSchedulerInputComponent;
  let fixture: ComponentFixture<DateSchedulerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateSchedulerInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSchedulerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
