import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCompletedDetailsComponent } from './action-completed-details.component';

describe('ActionCompletedDetailsComponent', () => {
  let component: ActionCompletedDetailsComponent;
  let fixture: ComponentFixture<ActionCompletedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionCompletedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCompletedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
