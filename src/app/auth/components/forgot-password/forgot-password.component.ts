import { Component, ChangeDetectionStrategy } from '@angular/core';
import { sendPasswordResetEmail } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth/stores';
import { from } from 'rxjs';

@Component({
  selector: 't-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss', '../../styles/auth.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent {
  readonly form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  async resetPassword(): Promise<void> {
    const { email } = this.form.value;
    from(sendPasswordResetEmail(this.authService.auth, email)).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
