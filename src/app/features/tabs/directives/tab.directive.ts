import { Directive, Input, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Directive({
  selector: '[tTab]',
})
export class TabDirective {
  @Input('tTab') set label(value: string) {
    this.label$.next(value);
  }
  readonly label$ = new BehaviorSubject<string>(null);

  constructor(public template: TemplateRef<any>) {}

  getLabel(): Observable<string> {
    return this.label$.asObservable();
  }
}
