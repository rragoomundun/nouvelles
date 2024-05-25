import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PasswordForgottenComponent } from './components/password-forgotten/password-forgotten.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';

const routes: Routes = [
  {
    path: 'mot-de-passe-oublie',
    component: PasswordForgottenComponent,
  },
  {
    path: 'mot-de-passe/reinitialiser/:resetPasswordToken',
    component: PasswordResetComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutes {}
