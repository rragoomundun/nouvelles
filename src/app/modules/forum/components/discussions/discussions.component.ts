import {
  Component,
  OnDestroy,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  RouterModule,
  NavigationEnd,
} from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { DateTime } from 'luxon';

import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';

import { ForumSharedService } from '../../../../shared/services/forum/forum-shared.service';
import { ForumService } from '../../services/forum/forum.service';
import { AppSharedService } from '../../../../shared/services/app/app-shared.service';
import { UrlSharedService } from '../../../../shared/services/url/url-shared.service';

@Component({
  selector: 'app-discussions',
  standalone: true,
  imports: [PaginationComponent, TranslateModule, RouterModule],
  templateUrl: './discussions.component.html',
  styleUrl: './discussions.component.scss',
})
export class DiscussionsComponent implements OnInit, OnDestroy {
  routerEventsSubscription: Subscription;
  forum: string;
  discussions: any[];
  noDiscussions: boolean;
  nbPages: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService,
    private appSharedService: AppSharedService,
    private forumSharedService: ForumSharedService,
    private forumService: ForumService,
    public urlSharedService: UrlSharedService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  get page(): number {
    return Number(this.activatedRoute.snapshot.queryParams['page'] || '1');
  }

  ngOnInit(): void {
    this.forum = this.router.url.split('/')[2].split('?')[0];

    this.getMetaInformation();
    this.getDiscussions();

    this.forumSharedService.getForums().subscribe({
      next: (value) => {
        const forumName = value.find(
          (forum: any) => forum.label === this.forum,
        ).name;

        this.appSharedService.setTitle(
          `${forumName} - ${this.translateService.instant('FORUM_PAGE.TITLE')}`,
          false,
        );

        this.forumService.breadcrumbItems = [
          {
            label: this.translateService.instant('FORUM_PAGE.TITLE'),
            link: '/forum',
          },
          {
            label: forumName,
            link: `/forum/${this.forum}`,
          },
        ];
      },
    });

    this.routerEventsSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getDiscussions();
      });
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }

  getMetaInformation(): void {
    this.forumService.getForumMeta(this.forum).subscribe({
      next: (value) => {
        this.nbPages = value.nbPages;
      },
    });
  }

  getDiscussions(): void {
    this.forumService.getDiscussions(this.forum, this.page).subscribe({
      next: (value) => {
        this.discussions = value;

        if (this.discussions.length === 0) {
          this.noDiscussions = true;
        }

        for (const discussion of this.discussions) {
          discussion.firstMessageDateFormatted = DateTime.fromISO(
            discussion.firstMessageDate,
          ).toFormat('dd/LL/yyyy, HH:mm');
          discussion.lastMessageDateFormatted = DateTime.fromISO(
            discussion.lastMessageDate,
          ).toFormat('dd/LL/yyyy, HH:mm');
        }

        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }));
        }
      },
    });
  }
}
