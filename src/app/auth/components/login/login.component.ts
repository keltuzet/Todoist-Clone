import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, from, of, Subject } from 'rxjs';
import { FirebaseError } from 'firebase/app';
import { AuthService } from '@auth/stores';
import { SnackbarService } from '@features/snackbar';

@Component({
  selector: 't-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../styles/auth.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  readonly showError$ = new Subject<boolean>();

  get email(): FormControl {
    return this.form.controls.email as FormControl;
  }
  get password(): FormControl {
    return this.form.controls.email as FormControl;
  }

  constructor(private authService: AuthService, private router: Router, private snackbarService: SnackbarService) {}

  login(): void {
    this.showError$.next(true);
    if (this.form.invalid) return;
    const { email, password } = this.form.value;
    from(this.authService.signin(email, password)).subscribe(() => this.navToRoot());
  }

  loginFromGoogle(): void {
    from(this.authService.signin('google'))
      .pipe(
        catchError((err: FirebaseError) => {
          this.snackbarService.open({ data: { message: this.getFirebaseErrorMessage(err) } });
          return of();
        }),
      )
      .subscribe(() => this.navToRoot());
  }

  loginFromFacebook(): void {
    from(this.authService.signin('facebook'))
      .pipe(
        catchError((err: FirebaseError) => {
          this.snackbarService.open({ data: { message: this.getFirebaseErrorMessage(err) } });
          return of();
        }),
      )
      .subscribe(() => this.navToRoot());
  }

  loginFromApple(): void {
    from(this.authService.signin('apple'))
      .pipe(
        catchError((err: FirebaseError) => {
          this.snackbarService.open({ data: { message: this.getFirebaseErrorMessage(err) } });
          return of();
        }),
      )
      .subscribe(() => this.navToRoot());
  }

  private navToRoot(): void {
    this.router.navigate(['/']);
  }

  private getFirebaseErrorMessage(err: FirebaseError): string {
    return err.message.replace('Firebase: ', '').replace(` (${err.code}).`, '');
  }
}
