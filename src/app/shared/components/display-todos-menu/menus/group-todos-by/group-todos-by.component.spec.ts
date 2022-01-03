import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTodosByComponent } from './group-todos-by.component';

describe('GroupTodosByComponent', () => {
  let component: GroupTodosByComponent;
  let fixture: ComponentFixture<GroupTodosByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupTodosByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTodosByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
