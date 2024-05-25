import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewArticleComponent } from './components/new-article/new-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';

const routes: Routes = [
  { path: 'nouveau', component: NewArticleComponent },
  { path: ':id/editer', component: EditArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutes {}
