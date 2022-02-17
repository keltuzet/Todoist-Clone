import { Injectable } from '@angular/core';
import { AuthQuery } from '@auth/stores';

@Injectable({
  providedIn: 'root',
})
export class MeQuery {
  readonly myId$ = this.query.select('uid');

  constructor(public query: AuthQuery) {}

  getMyId(): string {
    return this.query.getValue().uid;
  }
}
