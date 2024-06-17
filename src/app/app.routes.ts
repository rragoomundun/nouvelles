import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth/auth.guard';
import { isAdminOrRedactorGuard } from './core/guards/is-admin-or-redactor-guard/is-admin-or-redactor.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'inscription',
    loadChildren: () =>
      import('./modules/registration/registration.module').then(
        (m) => m.RegistrationModule,
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'categorie',
    loadChildren: () =>
      import('./modules/category/category.module').then(
        (m) => m.CategoryModule,
      ),
  },
  {
    path: 'article',
    loadChildren: () =>
      import('./modules/article/article.module').then((m) => m.ArticleModule),
    canActivate: [isAdminOrRedactorGuard],
  },
  {
    path: 'forum',
    loadChildren: () =>
      import('./modules/forum/forum.module').then((m) => m.ForumModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'parametres',
    loadChildren: () =>
      import('./modules/settings/settings.module').then(
        (m) => m.SettingsModule,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'rechercher',
    loadChildren: () =>
      import('./modules/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(
        (m) => m.NotFoundModule,
      ),
  },
];
