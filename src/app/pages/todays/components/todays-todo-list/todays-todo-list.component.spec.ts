import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysTodoListComponent } from './todays-todo-list.component';

describe('TodaysTodoListComponent', () => {
  let component: TodaysTodoListComponent;
  let fixture: ComponentFixture<TodaysTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
