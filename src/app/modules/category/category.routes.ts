import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './components/article/article.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {
    path: ':categorie/article/:articleId/:articleTitle',
    component: ArticleComponent,
  },
  {
    path: ':categorie',
    component: CategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutes {}
