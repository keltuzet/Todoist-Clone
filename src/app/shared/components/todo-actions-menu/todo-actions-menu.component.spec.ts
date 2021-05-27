import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoActionsMenuComponent } from './todo-actions-menu.component';

describe('TodoActionsMenuComponent', () => {
  let component: TodoActionsMenuComponent;
  let fixture: ComponentFixture<TodoActionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoActionsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoActionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
