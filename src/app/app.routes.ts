import { Routes } from '@angular/router';

import { isAdminOrRedactorGuard } from './shared/guards/is-admin-or-redactor/is-admin-or-redactor.guard';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterConfirmComponent } from './components/register-confirm/register-confirm.component';
import { PasswordForgottenComponent } from './components/password-forgotten/password-forgotten.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { CategoryComponent } from './components/category/category.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleWriteComponent } from './components/article-write/article-write.component';
import { NewArticleComponent } from './components/new-article/new-article.component';

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
      {
        path: 'mot-de-passe/reinitialiser/:resetPasswordToken',
        component: PasswordResetComponent,
      },
      { path: '**', redirectTo: '' },
    ],
  },
  {
    path: 'categorie',
    children: [
      {
        path: ':categorie/article/:articleId/:articleTitle',
        component: ArticleComponent,
      },
      {
        path: ':categorie',
        component: CategoryComponent,
      },
    ],
  },
  {
    path: 'article/nouveau',
    component: NewArticleComponent,
    canActivate: [isAdminOrRedactorGuard],
  },
  {
    path: 'article/ecrire',
    component: ArticleWriteComponent,
    canActivate: [isAdminOrRedactorGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
