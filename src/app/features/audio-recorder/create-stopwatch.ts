import { defer, EMPTY, Observable, Subject, timer } from 'rxjs';
import { filter, map, switchMap, takeUntil, tap } from 'rxjs/operators';

export function createStopwatch(control$: Observable<string>, interval = 1000): Observable<number> {
  return defer(() => {
    let toggle = false;
    let count = 0;

    const endTicker$ = new Subject<void>();

    const ticker = () => {
      return timer(0, interval).pipe(
        takeUntil(endTicker$),
        map(x => count++),
      );
    };

    return control$.pipe(
      tap({
        next: _ => {
          /*Do nothing*/
        },
        complete: () => {
          endTicker$.next();
          endTicker$.complete();
        },
        error: err => {
          endTicker$.next();
          endTicker$.complete();
        },
      }),
      filter(control => control === 'START' || control === 'STOP' || control === 'RESET'),
      switchMap(control => {
        if (control === 'START' && !toggle) {
          toggle = true;
          return ticker();
        } else if (control === 'STOP' && toggle) {
          toggle = false;
          return EMPTY;
        } else if (control === 'RESET') {
          count = 0;
          if (toggle) {
            return ticker();
          }
        }
        return EMPTY;
      }),
    );
  });
}
