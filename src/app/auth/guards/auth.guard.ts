import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthQuery, AuthService, AuthStore } from '@auth/stores';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private authStore: AuthStore,
    private auth: AuthQuery,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authStore.setLoading(true);
    return this.authService.sync().pipe(
      map(data => {
        this.authStore.setLoading(false);
        if (!data) this.navToLogin();
        const [user, profile] = data;
        if (!user) this.navToLogin();
        this.authStore.update({
          profile: {
            displayName: profile.displayName || user.displayName,
            photoURL: profile.photoURL || user.photoURL,
            phoneNumber: profile.phoneNumber || user.phoneNumber,
            email: user.email,
          },
        });
        return true;
      }),
    );
  }

  private navToLogin(): void {
    this.router.navigate(['/login']);
  }
}
