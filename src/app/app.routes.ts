import { Routes } from '@angular/router';

import { isAdminOrRedactorGuard } from './shared/guards/is-admin-or-redactor/is-admin-or-redactor.guard';

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
    path: '**',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(
        (m) => m.NotFoundModule,
      ),
  },
];
