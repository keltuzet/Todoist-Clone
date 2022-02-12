import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService, AuthStore } from '@auth/stores';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private authStore: AuthStore) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authStore.setLoading(true);
    return this.authService.sync().pipe(
      map(() => {
        const user = this.authService.user;
        const hasUser = Boolean(user);
        if (!hasUser) {
          this.router.navigate(['/login']);
          return false;
        }
        this.authStore.setLoading(false);
        return hasUser;
      }),
    );
  }
}
