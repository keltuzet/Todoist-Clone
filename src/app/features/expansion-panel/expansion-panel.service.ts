import { Injectable } from '@angular/core';
import { BehaviorSubject, NEVER, Observable } from 'rxjs';
import { isNil } from '@shared/utils';

@Injectable({
  providedIn: 'root',
})
export class ExpansionPanelService {
  private readonly key = 'expansionPanelStates';
  private states$: Dictionary<BehaviorSubject<boolean>>;

  constructor() {
    const states = <Dictionary<boolean>>JSON.parse(localStorage.getItem(this.key)) || {};
    this.states$ = Object.entries(states).reduce((accumulator, [key, val]) => {
      accumulator[key] = new BehaviorSubject(val);
      return accumulator;
    }, {}) as Dictionary<BehaviorSubject<boolean>>;
  }

  create(tag: string, isExpanded = true) {
    if (this.has(tag)) return;
    this.states$[tag] = new BehaviorSubject(isExpanded);
    this.save();
  }

  get(tag: string): Observable<boolean> {
    return this.has(tag) ? this.states$[tag].asObservable() : NEVER;
  }

  getValue(tag: string): boolean {
    return this.states$[tag].value;
  }

  update(tag: string, isExpanded: boolean) {
    this.states$[tag].next(isExpanded);
    this.save();
  }

  toggle(tag: string) {
    this.update(tag, !this.getValue(tag));
  }

  private has(tag: string): boolean {
    return !isNil(this.states$[tag]);
  }

  private save() {
    localStorage.setItem(
      this.key,
      JSON.stringify(
        Object.entries(this.states$).reduce((accumulator, [key, val$]) => {
          accumulator[key] = val$.value;
          return accumulator;
        }, {}),
      ),
    );
  }
}
