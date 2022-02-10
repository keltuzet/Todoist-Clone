import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDeadlineComponent } from './todo-deadline.component';

describe('TodoDeadlineComponent', () => {
  let component: TodoDeadlineComponent;
  let fixture: ComponentFixture<TodoDeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDeadlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
