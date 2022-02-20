import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePriorityButtonComponent } from './update-priority-button.component';

describe('UpdatePriorityButtonComponent', () => {
  let component: UpdatePriorityButtonComponent;
  let fixture: ComponentFixture<UpdatePriorityButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePriorityButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePriorityButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
