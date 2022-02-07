import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectActionsMenuComponent } from './project-actions-menu.component';

describe('ProjectActionsMenuComponent', () => {
  let component: ProjectActionsMenuComponent;
  let fixture: ComponentFixture<ProjectActionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectActionsMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectActionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
