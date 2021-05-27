import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoScheduleHolderComponent } from './todo-schedule-holder.component';

describe('TodoScheduleHolderComponent', () => {
  let component: TodoScheduleHolderComponent;
  let fixture: ComponentFixture<TodoScheduleHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoScheduleHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoScheduleHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
