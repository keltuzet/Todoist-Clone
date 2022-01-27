import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortTodosByComponent } from './sort-todos.component';

describe('SortTodosByComponent', () => {
  let component: SortTodosByComponent;
  let fixture: ComponentFixture<SortTodosByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortTodosByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortTodosByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
