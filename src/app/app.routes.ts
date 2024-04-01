import { Routes } from '@angular/router';

import { RegisterConfirmComponent } from './components/register-confirm/register-confirm.component';

export const routes: Routes = [
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
];
