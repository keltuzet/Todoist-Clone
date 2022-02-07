import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTagsMenuComponent } from './select-tags-menu.component';

describe('SelectTagsMenuComponent', () => {
  let component: SelectTagsMenuComponent;
  let fixture: ComponentFixture<SelectTagsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectTagsMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTagsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
