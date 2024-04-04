import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterConfirmComponent } from './components/register-confirm/register-confirm.component';
import { PasswordForgottenComponent } from './components/password-forgotten/password-forgotten.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'inscription',
    children: [
      {
        path: 'confirmer/:confirmationToken',
        component: RegisterConfirmComponent,
      },
      { path: '**', redirectTo: '' },
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'mot-de-passe-oublie',
        component: PasswordForgottenComponent,
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
