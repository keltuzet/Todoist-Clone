import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderExtraToolbarComponent } from './header-extra-toolbar.component';

describe('HeaderExtraToolbarComponent', () => {
  let component: HeaderExtraToolbarComponent;
  let fixture: ComponentFixture<HeaderExtraToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderExtraToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderExtraToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
