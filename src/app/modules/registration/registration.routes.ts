import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterConfirmComponent } from './components/register-confirm/register-confirm.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'confirmer/:confirmationToken',
        component: RegisterConfirmComponent,
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutes {}
