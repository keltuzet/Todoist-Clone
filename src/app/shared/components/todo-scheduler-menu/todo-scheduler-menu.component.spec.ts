import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSchedulerMenuComponent } from './todo-scheduler-menu.component';

describe('TodoSchedulerMenuComponent', () => {
  let component: TodoSchedulerMenuComponent;
  let fixture: ComponentFixture<TodoSchedulerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoSchedulerMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSchedulerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
