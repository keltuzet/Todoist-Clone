import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTimeMenuComponent } from './set-time-menu.component';

describe('SetTimeMenuComponent', () => {
  let component: SetTimeMenuComponent;
  let fixture: ComponentFixture<SetTimeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetTimeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTimeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
