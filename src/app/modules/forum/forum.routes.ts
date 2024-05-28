import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForumComponent } from './components/forum/forum.component';
import { ForumListComponent } from './components/forum-list/forum-list.component';
import { DiscussionsComponent } from './components/discussions/discussions.component';
import { NewDiscussionComponent } from './components/new-discussion/new-discussion.component';
import { DiscussionComponent } from './components/discussion/discussion.component';

const routes: Routes = [
  {
    path: '',
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
              {
                path: 'nouvelle',
                component: NewDiscussionComponent,
              },
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumRoutes {}
