import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortTodosComponent } from './sort-todos.component';

describe('SortTodosComponent', () => {
  let component: SortTodosComponent;
  let fixture: ComponentFixture<SortTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
