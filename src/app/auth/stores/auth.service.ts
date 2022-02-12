import { Injectable } from '@angular/core';
import { CollectionConfig, FireAuthService } from 'akita-ng-fire';
import { UserCredential } from 'firebase/auth';
import { from } from 'rxjs';
import { AuthState, AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'users' })
export class AuthService extends FireAuthService<AuthState> {
  private readonly accessTokenKey = 'accessToken';
  private readonly refreshTokenKey = 'refreshToken';

  constructor(store: AuthStore) {
    super(store);
  }

  onCreate() {
    console.log('onCreate');
  }

  onSignup() {
    console.log('onSignup');
  }

  onSignin(credentials: UserCredential): void {
    console.log('onSignin');
  }

  onUpdate() {
    console.log('log');
  }
}
