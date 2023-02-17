import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProjectMenuComponent } from './select-project-menu.component';

describe('SelectProjectMenuComponent', () => {
  let component: SelectProjectMenuComponent;
  let fixture: ComponentFixture<SelectProjectMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectProjectMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProjectMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
