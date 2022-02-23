import { Injectable } from '@angular/core';
import { Observable, from, catchError, NEVER, map } from 'rxjs';
import { SnackbarService } from '@features/snackbar';

@Injectable({
  providedIn: 'root',
})
export class MediaRecorderService {
  readonly isUserMediaSupported: boolean = Boolean(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);

  constructor(private snackbarService: SnackbarService) {}

  getMediaRecorder(): Observable<MediaRecorder> {
    return this.getMediaStream().pipe(map(stream => new MediaRecorder(stream)));
  }

  getMediaStream(): Observable<MediaStream> {
    if (!this.isUserMediaSupported) {
      this.snackbarService.open({ data: { message: 'getUserMedia not supported on your browser!' } });
      return NEVER;
    }

    return from(navigator.mediaDevices.getUserMedia({ audio: true })).pipe(
      catchError(err => {
        console.error('The following getUserMedia error occured: ' + err);
        return NEVER;
      }),
    );
  }
}
