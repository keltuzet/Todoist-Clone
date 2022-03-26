import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBoardCardComponent } from './todo-board-card.component';

describe('TodoBoardCardComponent', () => {
  let component: TodoBoardCardComponent;
  let fixture: ComponentFixture<TodoBoardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoBoardCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoBoardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
