import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { FireAuthState } from 'akita-ng-fire';

export interface Profile {
  displayName: string;
  photoURL: string;
  email: string;
  phoneNumber: string | number;
}

export interface AuthState extends FireAuthState<Profile> {}

export function createProfileInitialState(): Profile {
  return {
    displayName: undefined,
    photoURL: undefined,
    email: undefined,
    phoneNumber: undefined,
  };
}

export const profileKeys = Object.keys(createProfileInitialState());

export function createInitialState(): AuthState {
  return {
    displayName: undefined,
    photoURL: undefined,
    uid: undefined,
    emailVerified: undefined,
    profile: createProfileInitialState(),
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
