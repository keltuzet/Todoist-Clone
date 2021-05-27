import { Subject } from 'rxjs';

export class MenuRef {
  public close$ = new Subject<void>();

  close() {
    this.close$.next();
  }
}
