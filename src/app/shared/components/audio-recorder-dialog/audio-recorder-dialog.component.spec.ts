import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioRecorderDialogComponent } from './audio-recorder-dialog.component';

describe('AudioRecorderDialogComponent', () => {
  let component: AudioRecorderDialogComponent;
  let fixture: ComponentFixture<AudioRecorderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioRecorderDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioRecorderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
