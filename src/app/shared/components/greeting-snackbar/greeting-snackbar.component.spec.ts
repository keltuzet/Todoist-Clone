import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingSnackbarComponent } from './greeting-snackbar.component';

describe('GreetingSnackbarComponent', () => {
  let component: GreetingSnackbarComponent;
  let fixture: ComponentFixture<GreetingSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
