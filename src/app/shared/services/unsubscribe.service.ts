import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Easily cancel subscriptions when component is destroyed to prevent memory leaks.
 *
 * Usage:
 * 1. Provide MyndUnsubscribeService within your component's providers.
 * 2. Inject MyndUnsubscribeService in component's constructor.
 * 3. When service is destroyed, service will emit a value that will cancel the subscription.
 */
@Injectable()
export class UnsubscribeService extends Subject<void> implements OnDestroy {
  ngOnDestroy(): void {
    this.next();
    this.complete();
  }
}
