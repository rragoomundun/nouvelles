import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { ProfileArticlesComponent } from './components/profile-articles/profile-articles.component';
import { ProfileDiscussionsComponent } from './components/profile-discussions/profile-discussions.component';
import { ProfileMessagesComponent } from './components/profile-messages/profile-messages.component';

const routes: Routes = [
  {
    path: ':userId/:userName',
    component: ProfileComponent,
    children: [
      {
        path: 'articles',
        component: ProfileArticlesComponent,
      },
      {
        path: 'discussions',
        component: ProfileDiscussionsComponent,
      },
      {
        path: 'messages',
        component: ProfileMessagesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutes {}
