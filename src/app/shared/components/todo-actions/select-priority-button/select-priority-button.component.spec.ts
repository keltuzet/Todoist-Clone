import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPriorityButtonComponent } from './select-priority-button.component';

describe('SelectPriorityButtonComponent', () => {
  let component: SelectPriorityButtonComponent;
  let fixture: ComponentFixture<SelectPriorityButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPriorityButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPriorityButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
