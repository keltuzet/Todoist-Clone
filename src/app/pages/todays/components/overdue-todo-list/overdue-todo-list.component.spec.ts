import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueTodoListComponent } from './overdue-todo-list.component';

describe('OverdueTodoListComponent', () => {
  let component: OverdueTodoListComponent;
  let fixture: ComponentFixture<OverdueTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverdueTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdueTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
