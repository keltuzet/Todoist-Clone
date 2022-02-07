import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskDetailsComponent } from './update-task-details.component';

describe('UpdateTaskDetailsComponent', () => {
  let component: UpdateTaskDetailsComponent;
  let fixture: ComponentFixture<UpdateTaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTaskDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
