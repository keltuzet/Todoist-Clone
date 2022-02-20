import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DialogRef } from '@features/dialog';
import { catchError, from, NEVER, Observable } from 'rxjs';

enum RecordingState {
  Initial = 'initial',
  Recording = 'recording',
  Completed = 'completed',
}

@Component({
  selector: 't-audio-recorder-dialog',
  templateUrl: './audio-recorder-dialog.component.html',
  styleUrls: ['./audio-recorder-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioRecorderDialogComponent implements OnInit {
  private mediaStream: MediaStream;
  private mediaRecorder: MediaRecorder;
  recordingStatesMap = RecordingState;
  state: RecordingState = RecordingState.Initial;
  chunks: Blob[] = [];
  time = new Date(0);
  timerId: any;

  @ViewChild('audio') audio: ElementRef<HTMLAudioElement>;

  constructor(private dialogRef: DialogRef, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      this.getMediaRecorder();
    } else {
      console.error('getUserMedia not supported on your browser!');
    }
  }

  startRecord(): void {
    this.state = RecordingState.Recording;
    this.mediaRecorder.start();
    this.time = new Date(0);
    this.timerId = setInterval(() => {
      this.time = new Date(this.time.getTime() + 1000);
      this.changeDetectorRef.detectChanges();
    }, 1000);
  }

  stopRecord(): void {
    this.state = RecordingState.Completed;
    this.mediaRecorder.stop();
    clearInterval(this.timerId);
  }

  playRecord(): void {
    const blob = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' });
    const audioURL = window.URL.createObjectURL(blob);
    this.audio.nativeElement.src = audioURL;
    this.audio.nativeElement.play();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  private getMediaStream(): Observable<MediaStream> {
    return from(navigator.mediaDevices.getUserMedia({ audio: true })).pipe(
      catchError(err => {
        console.log('The following getUserMedia error occured: ' + err);
        return NEVER;
      }),
    );
  }

  private getMediaRecorder(): void {
    this.getMediaStream().subscribe(stream => {
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.ondataavailable = this.saveChunk.bind(this);
    });
  }

  private saveChunk(event: BlobEvent): void {
    this.chunks.push(event.data);
  }
}
