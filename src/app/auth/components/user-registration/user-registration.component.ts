import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth/stores/auth.service';
import { SnackbarService } from '@features/snackbar';
import { FirebaseError } from 'firebase/app';
import { catchError, from, of } from 'rxjs';

@Component({
  selector: 't-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss', '../../styles/auth.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRegistrationComponent implements OnInit {
  readonly form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  });

  constructor(private authService: AuthService, private router: Router, private snackbarService: SnackbarService) {}

  ngOnInit(): void {}

  async submit(): Promise<void> {
    if (this.form.invalid) return;
    const formValue = this.form.value;
    from(this.authService.signup(formValue.email, formValue.password))
      .pipe(
        catchError((err: FirebaseError) => {
          this.snackbarService.open({ data: { message: err.message } });
          return of();
        }),
      )
      .subscribe(() => this.router.navigate(['/']));
  }
}
