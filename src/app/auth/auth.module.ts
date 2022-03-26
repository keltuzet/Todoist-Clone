import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule as FireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserRegistrationComponent, LoginComponent, ForgotPasswordComponent } from './components';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgxLetDirectiveModule } from 'ngx-let-directive';

@NgModule({
  declarations: [UserRegistrationComponent, LoginComponent, ForgotPasswordComponent],
  imports: [CommonModule, FireAuthModule, ReactiveFormsModule, RouterModule, AngularSvgIconModule, NgxLetDirectiveModule],
})
export class AuthModule {}
