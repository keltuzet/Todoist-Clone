import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPriorityMenuComponent } from './select-priority-menu.component';

describe('SelectPriorityMenuComponent', () => {
  let component: SelectPriorityMenuComponent;
  let fixture: ComponentFixture<SelectPriorityMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPriorityMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPriorityMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
