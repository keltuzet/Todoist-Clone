import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTodosMenuComponent } from './display-todos-menu.component';

describe('DisplayTodosMenuComponent', () => {
  let component: DisplayTodosMenuComponent;
  let fixture: ComponentFixture<DisplayTodosMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTodosMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTodosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
