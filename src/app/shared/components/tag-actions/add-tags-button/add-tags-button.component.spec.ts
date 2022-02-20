import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTagsButtonComponent } from './add-tags-button.component';

describe('AddTagsButtonComponent', () => {
  let component: AddTagsButtonComponent;
  let fixture: ComponentFixture<AddTagsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTagsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTagsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
