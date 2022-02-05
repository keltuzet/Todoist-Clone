import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Spinner } from 'ngx-spinner/lib/ngx-spinner.enum';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private readonly spinnerDefaultOptions: Spinner = {
    zIndex: 1,
    fullScreen: false,
    type: 'ball-clip-rotate-multiple',
    color: '#656565',
    size: 'default',
    bdColor: 'rgba(0,0,0,0.04)',
  };

  constructor(private spinner: NgxSpinnerService) {}

  public wrapWithSpinner<T>(stream: Observable<T>, spinnerName: string): Observable<T> {
    return spinnerName ? this.skipThroughSpinnerWrap(stream, spinnerName) : stream;
  }

  protected skipThroughSpinnerWrap<T>(stream: Observable<T>, spinnerName: string, options?: Spinner): Observable<T> {
    const mergedOptions = { ...this.spinnerDefaultOptions, ...options };

    this.spinner.show(spinnerName, mergedOptions);
    return stream.pipe(tap(() => this.hideSpinner(spinnerName)));
  }

  private hideSpinner(spinnerName: string): void {
    this.spinner.hide(spinnerName);
  }
}
