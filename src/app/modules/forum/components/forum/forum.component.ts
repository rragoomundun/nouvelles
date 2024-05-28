import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

import { ForumSharedService } from '../../../../shared/services/forum/forum-shared.service';
import { ForumService } from '../../services/forum/forum.service';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [RouterModule, TranslateModule, BreadcrumbComponent],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss',
})
export class ForumComponent implements OnInit, OnDestroy {
  routerEventsSubscription: Subscription;

  constructor(
    private router: Router,
    private translateService: TranslateService,
    public forumService: ForumService,
    public forumSharedService: ForumSharedService,
  ) {}

  get onDiscussions(): boolean {
    let regex = new RegExp('/forum/[^/]+$');
    return regex.test(this.router.url);
  }

  ngOnInit(): void {
    this.setCurrentForum();

    this.routerEventsSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setCurrentForum();

        if (this.router.url === '/forum') {
          this.forumService.breadcrumbItems = [
            {
              label: this.translateService.instant('FORUM_PAGE.TITLE'),
              link: '/forum',
            },
          ];
        }
      });

    if (this.router.url === '/forum') {
      this.forumService.breadcrumbItems = [
        {
          label: this.translateService.instant('FORUM_PAGE.TITLE'),
          link: '/forum',
        },
      ];
    }
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }

  setCurrentForum(): void {
    let regex = new RegExp('/forum/.+$');

    if (regex.test(this.router.url)) {
      this.forumSharedService.currentForum = this.router.url
        .split('/')[2]
        .split('?')[0];
    } else {
      this.forumSharedService.currentForum = null;
    }
  }
}
