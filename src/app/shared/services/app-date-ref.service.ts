import { Injectable, NgZone } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppDateRef {
  now = new Date();

  constructor(private zone: NgZone) {
    zone.runOutsideAngular(() => {
      interval(60000).subscribe(() => {
        this.now.setMinutes(this.now.getMinutes() + 1);
      });
    });
  }
}
