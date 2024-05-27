import {
  Component,
  OnDestroy,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  RouterModule,
} from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { marked } from 'marked';
import { DateTime } from 'luxon';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { AnswerDiscussionComponent } from '../answer-discussion/answer-discussion.component';

import { ForumService } from '../../services/forum/forum.service';
import { UrlSharedService } from '../../../../shared/services/url/url-shared.service';
import { DateSharedService } from '../../../../shared/services/date/date-shared.service';
import { AppSharedService } from '../../../../shared/services/app/app-shared.service';
import { UserSharedService } from '../../../../shared/services/user/user-shared.service';

@Component({
  selector: 'app-discussion',
  standalone: true,
  imports: [
    RouterModule,
    TranslateModule,
    PaginationComponent,
    AnswerDiscussionComponent,
  ],
  templateUrl: './discussion.component.html',
  styleUrl: './discussion.component.scss',
})
export class DiscussionComponent implements OnInit, OnDestroy {
  readonly MESSAGES_PER_PAGE: number;

  routerEventsSubscription: Subscription;
  forum: string;
  id: number;
  name: string;
  nbPages: number;
  messages: any[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService,
    private appSharedService: AppSharedService,
    private forumService: ForumService,
    private dateSharedService: DateSharedService,
    public userSharedService: UserSharedService,
    public urlSharedService: UrlSharedService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
    this.MESSAGES_PER_PAGE = 20;
  }

  get page(): number {
    return Number(this.activatedRoute.snapshot.queryParams['page'] || '1');
  }

  ngOnInit(): void {
    this.forum = this.activatedRoute.snapshot.params['forum'];
    this.id = this.activatedRoute.snapshot.params['discussionId'];

    this.getMetaInformation();
    this.getMessages();

    this.routerEventsSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getMessages();
      });
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }

  getMetaInformation(): void {
    this.forumService.getDiscussionMeta(this.forum, this.id).subscribe({
      next: (value) => {
        this.name = value.name;
        this.nbPages = value.nbPages;

        this.appSharedService.setTitle(
          `${this.name} - ${this.translateService.instant('FORUM_PAGE.TITLE')}`,
          false,
        );
      },
    });
  }

  getMessages(scrollTop: boolean = true): void {
    this.forumService.getDiscussionMessages(this.id, this.page).subscribe({
      next: (value) => {
        this.messages = value;

        for (const message of this.messages) {
          message.content = <string>marked.parse(message.content);

          const dateObj = new Date(message.date);
          message.dateFormatted = this.dateSharedService.dt
            .set({
              day: dateObj.getDate(),
              month: dateObj.getMonth() + 1,
              year: dateObj.getFullYear(),
              hour: dateObj.getHours(),
              minute: dateObj.getMinutes(),
            })
            .toFormat('dd MMMM yyyy, HH:mm');

          if (message.updatedDate) {
            const updatedDateObj = new Date(message.updatedDate);
            message.updatedDateFormatted = this.dateSharedService.dt
              .set({
                day: updatedDateObj.getDate(),
                month: updatedDateObj.getMonth() + 1,
                year: updatedDateObj.getFullYear(),
                hour: updatedDateObj.getHours(),
                minute: updatedDateObj.getMinutes(),
              })
              .toFormat('dd MMMM yyyy, HH:mm');
          }
        }

        if (isPlatformBrowser(this.platformId) && scrollTop) {
          setTimeout(() => window.scrollTo(0, 0));
        }
      },
    });
  }

  onNewAnswer(): void {
    if (this.messages.length === this.MESSAGES_PER_PAGE) {
      const route = this.router.url.split('?')[0];

      this.nbPages++;

      this.router.navigate([route], { queryParams: { page: this.page + 1 } });
    } else {
      this.getMessages(false);
    }
  }
}
