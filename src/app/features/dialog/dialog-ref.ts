import { OverlayRef } from '@angular/cdk/overlay';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

export class DialogRef<R = any> {
  private close$ = new Subject<R>();
  private open$ = new Subject<void>();

  constructor(private overlayRef: OverlayRef) {
    this.overlayRef
      .backdropClick()
      .pipe(takeUntil(this.close$))
      .subscribe(() => this.close());
  }

  close(dialogResult?: R): void {
    this.close$.next(dialogResult);
    this.overlayRef.dispose();
  }

  open(): void {
    this.open$.next();
  }

  afterOpened(): Observable<void> {
    return this.open$.asObservable();
  }

  afterClosed(): Observable<R | undefined> {
    return this.close$.asObservable();
  }
}
