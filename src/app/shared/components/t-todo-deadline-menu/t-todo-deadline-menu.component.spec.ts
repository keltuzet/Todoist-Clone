import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDeadlineMenuComponent } from './t-todo-deadline-menu.component';

describe('TodoDeadlineComponent', () => {
  let component: TodoDeadlineMenuComponent;
  let fixture: ComponentFixture<TodoDeadlineMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDeadlineMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDeadlineMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
