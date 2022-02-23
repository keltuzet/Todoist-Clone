import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { MediaRecorderService } from './media-recorder.service';
import { createStopwatch } from './create-stopwatch';

enum RecordingState {
  Initial = 'initial',
  Recording = 'recording',
  Completed = 'completed',
  Playing = 'playing',
}

@Component({
  selector: 't-audio-recorder',
  templateUrl: './audio-recorder.component.html',
  styleUrls: ['./audio-recorder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioRecorderComponent implements OnInit {
  private mediaRecorder: MediaRecorder;
  private timerSubscription: Subscription;
  private blob: Blob;
  readonly recordingStatesMap = RecordingState;
  readonly stopwatchTime$ = new BehaviorSubject(new Date(0));
  readonly stopwatchControl$ = new Subject<string>();
  readonly stopwatch$ = createStopwatch(this.stopwatchControl$);
  state: RecordingState = RecordingState.Initial;
  @Output() closeRecorder = new EventEmitter<any>();
  @ViewChild('audio', { static: true }) private audio: ElementRef<HTMLAudioElement>;

  constructor(private mediaRecorderService: MediaRecorderService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getMediaRecorder();
    this.stopwatch$.subscribe(ms => this.stopwatchTime$.next(new Date(ms * 1000)));
  }

  startRecord(): void {
    this.state = RecordingState.Recording;
    this.mediaRecorder.start();
    this.audio.nativeElement.pause();
    this.stopwatchControl$.next('STOP');
    this.stopwatchControl$.next('RESET');
    this.stopwatchControl$.next('START');
  }

  stopRecord(): void {
    this.state = RecordingState.Completed;
    this.mediaRecorder.stop();
    this.timerSubscription?.unsubscribe();
    this.stopwatchControl$.next('STOP');
    this.stopwatchControl$.next('RESET');
  }

  playRecord(): void {
    this.state = RecordingState.Playing;
    this.audio.nativeElement.play();
    this.stopwatchControl$.next('START');
  }

  resumeRecord(): void {
    this.state = RecordingState.Completed;
    this.audio.nativeElement.pause();
    this.audio.nativeElement.currentTime = 0;
    this.stopwatchControl$.next('STOP');
    this.stopwatchControl$.next('RESET');
  }

  attachRecord(): void {
    this.closeRecorder.emit(this.blob);
  }

  cancel(): void {
    this.closeRecorder.emit();
  }

  playingEnded(): void {
    this.state = RecordingState.Completed;
    this.stopwatchControl$.next('STOP');
    this.stopwatchControl$.next('RESET');
    this.changeDetectorRef.detectChanges();
  }

  private getMediaRecorder(): void {
    this.mediaRecorderService.getMediaRecorder().subscribe(mediaRecorder => {
      this.mediaRecorder = mediaRecorder;
      this.mediaRecorder.ondataavailable = this.saveChunk.bind(this);
    });
  }

  private saveChunk(event: BlobEvent): void {
    const data = event?.data;
    if (!data) return;
    this.blob = data;
    const blobForAudio = new Blob([data], { type: 'audio/ogg; codecs=opus' });
    const audioURL = window.URL.createObjectURL(blobForAudio);
    this.audio.nativeElement.src = audioURL;
    this.changeDetectorRef.detectChanges();
  }
}
