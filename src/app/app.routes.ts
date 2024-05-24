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
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { ForumComponent } from './components/forum/forum.component';
import { ForumListComponent } from './components/forum-list/forum-list.component';
import { DiscussionsComponent } from './components/discussions/discussions.component';
import { DiscussionComponent } from './components/discussion/discussion.component';
import { NewDiscussionComponent } from './components/new-discussion/new-discussion.component';

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
    path: 'article',
    children: [
      { path: 'nouveau', component: NewArticleComponent },
      { path: ':id/editer', component: EditArticleComponent },
    ],
    canActivate: [isAdminOrRedactorGuard],
  },
  {
    path: 'article/ecrire',
    component: ArticleWriteComponent,
    canActivate: [isAdminOrRedactorGuard],
  },
  {
    path: 'forum',
    component: ForumComponent,
    children: [
      {
        path: '',
        component: ForumListComponent,
      },
      {
        path: ':forum',
        children: [
          {
            path: '',
            component: DiscussionsComponent,
          },
          {
            path: 'discussion',
            children: [
              { path: 'nouvelle', component: NewDiscussionComponent },
              {
                path: ':discussionId/:discussionTitle',
                component: DiscussionComponent,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
