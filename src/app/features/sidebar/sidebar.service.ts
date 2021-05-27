import { Injectable } from '@angular/core';
import { isNil } from '@shared/utils';
import { BehaviorSubject, Observable } from 'rxjs';

import { DEFAULT_EXPAND_WIDTH } from './const';
import { SidebarState } from './models';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private states: Map<string, SidebarState>;
  private states$: { [k: string]: BehaviorSubject<SidebarState> } = {};

  constructor() {
    this.states = new Map(JSON.parse(localStorage.getItem('sidebarStates')));
    this.states.forEach((state, tag) => {
      this.states$[tag] = new BehaviorSubject(state);
    });
  }

  get(tag: string): Observable<SidebarState> {
    return this.states$[tag].asObservable();
  }

  create(tag: string, states: SidebarState = { isCollapsed: true, expandWidth: DEFAULT_EXPAND_WIDTH }) {
    if (this.states.has(tag)) return;
    this.states.set(tag, states);
    this.states$[tag] = new BehaviorSubject(states);
    this.save();
  }

  update(tag: string, newState: Partial<SidebarState>) {
    const prevState = this.states.get(tag);
    if (this.hasChanges(prevState, newState)) {
      const mergedState = {
        ...prevState,
        ...newState,
      };
      this.states.set(tag, mergedState);
      this.states$[tag].next(mergedState);
      this.save();
    }
  }

  toggle(tag: string) {
    this.update(tag, {
      isCollapsed: !this.states.get(tag).isCollapsed,
    });
  }

  expand(tag: string) {
    this.update(tag, { isCollapsed: false });
  }

  collapse(tag: string) {
    this.update(tag, { isCollapsed: true });
  }

  private hasChanges(prev: SidebarState, curr: Partial<SidebarState>): boolean {
    return (
      !(isNil(curr.expandWidth) || curr.expandWidth === prev.expandWidth) ||
      !(isNil(curr.isCollapsed) || curr.isCollapsed === prev.isCollapsed)
    );
  }

  private save() {
    localStorage.setItem('sidebarStates', JSON.stringify(Array.from(this.states.entries())));
  }
}
