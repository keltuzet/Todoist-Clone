import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTodoScheduleHolderDeadlineComponent } from './t-todo-schedule-holder-deadline.component';

describe('TTodoScheduleHolderDeadlineComponent', () => {
  let component: TTodoScheduleHolderDeadlineComponent;
  let fixture: ComponentFixture<TTodoScheduleHolderDeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TTodoScheduleHolderDeadlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TTodoScheduleHolderDeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
