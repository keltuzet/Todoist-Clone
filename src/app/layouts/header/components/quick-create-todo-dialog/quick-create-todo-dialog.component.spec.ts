import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCreateTodoDialogComponent } from './quick-create-todo-dialog.component';

describe('QuickCreateTodoDialogComponent', () => {
  let component: QuickCreateTodoDialogComponent;
  let fixture: ComponentFixture<QuickCreateTodoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickCreateTodoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickCreateTodoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
