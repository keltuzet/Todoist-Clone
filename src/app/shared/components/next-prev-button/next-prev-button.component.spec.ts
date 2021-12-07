import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPrevButtonComponent } from './next-prev-button.component';

describe('NextPrevButtonComponent', () => {
  let component: NextPrevButtonComponent;
  let fixture: ComponentFixture<NextPrevButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextPrevButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextPrevButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
