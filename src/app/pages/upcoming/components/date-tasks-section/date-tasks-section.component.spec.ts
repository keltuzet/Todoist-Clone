import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTasksSectionComponent } from './date-tasks-section.component';

describe('DateTasksSectionComponent', () => {
  let component: DateTasksSectionComponent;
  let fixture: ComponentFixture<DateTasksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateTasksSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTasksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
