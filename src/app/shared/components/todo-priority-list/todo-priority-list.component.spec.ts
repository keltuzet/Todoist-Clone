import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPriorityListComponent } from './todo-priority-list.component';

describe('TodoPriorityListComponent', () => {
  let component: TodoPriorityListComponent;
  let fixture: ComponentFixture<TodoPriorityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoPriorityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPriorityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
