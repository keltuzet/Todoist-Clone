import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { FireAuthState } from 'akita-ng-fire';

export interface Profile {
  displayName: string;
  photoURL: string;
}

export interface AuthState extends FireAuthState<Profile> {}

export function createInitialState(): AuthState {
  return {
    displayName: undefined,
    photoURL: undefined,
    uid: undefined,
    emailVerified: undefined,
    profile: undefined,
    loading: false,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState());
  }
}
