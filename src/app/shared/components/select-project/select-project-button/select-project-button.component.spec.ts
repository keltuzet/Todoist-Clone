import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProjectButtonComponent } from './select-project-button.component';

describe('SelectProjectButtonComponent', () => {
  let component: SelectProjectButtonComponent;
  let fixture: ComponentFixture<SelectProjectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectProjectButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProjectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
