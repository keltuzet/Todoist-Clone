import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAddTodoDialogComponent } from './quick-add-todo-dialog.component';

describe('QuickAddTodoDialogComponent', () => {
  let component: QuickAddTodoDialogComponent;
  let fixture: ComponentFixture<QuickAddTodoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickAddTodoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAddTodoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
