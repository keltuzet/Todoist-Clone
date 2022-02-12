import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule as FireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserRegistrationComponent, LoginComponent, ForgotPasswordComponent } from './components';

@NgModule({
  declarations: [UserRegistrationComponent, LoginComponent, ForgotPasswordComponent],
  imports: [CommonModule, FireAuthModule, ReactiveFormsModule, RouterModule],
})
export class AuthModule {}
