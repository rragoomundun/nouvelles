import {
  Component,
  OnDestroy,
  OnInit,
  Inject,
  PLATFORM_ID,
  ViewChild,
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
import { EditMessageComponent } from '../edit-message/edit-message.component';

import { ForumService } from '../../services/forum/forum.service';
import { UrlSharedService } from '../../../../shared/services/url/url-shared.service';
import { DateSharedService } from '../../../../shared/services/date/date-shared.service';
import { AppSharedService } from '../../../../shared/services/app/app-shared.service';
import { UserSharedService } from '../../../../shared/services/user/user-shared.service';
import { ForumSharedService } from '../../../../shared/services/forum/forum-shared.service';
import { NotFoundComponent } from '../../../not-found/components/not-found/not-found.component';

@Component({
    selector: 'app-discussion',
    imports: [
        RouterModule,
        TranslateModule,
        PaginationComponent,
        AnswerDiscussionComponent,
        EditMessageComponent,
        NotFoundComponent,
    ],
    templateUrl: './discussion.component.html',
    styleUrl: './discussion.component.scss'
})
export class DiscussionComponent implements OnInit, OnDestroy {
  readonly MESSAGES_PER_PAGE: number;

  @ViewChild(EditMessageComponent) editMessageComponent: EditMessageComponent;

  routerEventsSubscription: Subscription;
  forum: string;
  id: number;
  name: string;
  nbPages: number;
  messages: any[];
  notFound: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService,
    private appSharedService: AppSharedService,
    private forumService: ForumService,
    private forumSharedService: ForumSharedService,
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

    if (isPlatformBrowser(this.platformId)) {
      this.getMetaInformation();
      this.getMessages();
    }

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

        this.notFound = false;

        this.appSharedService.setTitle(
          `${this.name} - ${this.translateService.instant('FORUM_PAGE.TITLE')}`,
          false,
        );

        this.forumService.breadcrumbItems = [
          {
            label: this.translateService.instant('FORUM_PAGE.TITLE'),
            link: '/forum',
          },
          {
            label: this.forumSharedService.currentForumName,
            link: `/forum/${this.forumSharedService.currentForum}`,
          },
          {
            label: this.name,
            link: this.router.url,
          },
        ];
      },
      error: (error) => {
        const { type } = error.error;

        if (type && type === 'DISCUSSION_INCORRECT') {
          this.notFound = true;
        }
      },
    });
  }

  getMessages(scrollTop: boolean = true): void {
    this.forumService.getDiscussionMessages(this.id, this.page).subscribe({
      next: (value) => {
        this.messages = value;

        for (const message of this.messages) {
          message.contentFormatted = <string>marked.parse(message.content);

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

        if (isPlatformBrowser(this.platformId)) {
          const anchor = this.router.url.split('#')[1];

          if (anchor) {
            setTimeout(() => {
              document
                .getElementById(anchor)
                ?.scrollIntoView({ behavior: 'instant' });
              window.scrollBy({ top: -100, behavior: 'instant' });
            });
          } else if (scrollTop) {
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }));
          }
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

  onEditMessage(editData: {
    messageId: number;
    message: string;
    date: Date;
  }): void {
    const message = this.messages.find(
      (message) => message.id === editData.messageId,
    );

    message.contentFormatted = <string>marked.parse(editData.message);
    message.updatedDateFormatted = this.dateSharedService.dt
      .set({
        day: editData.date.getDate(),
        month: editData.date.getMonth() + 1,
        year: editData.date.getFullYear(),
        hour: editData.date.getHours(),
        minute: editData.date.getMinutes(),
      })
      .toFormat('dd MMMM yyyy, HH:mm');
  }

  onEditClick(messageId: number, message: string): void {
    this.editMessageComponent.open(this.id, messageId, message);
  }

  onThumbUpClick(message: any): void {
    if (this.userSharedService.isLoggedIn) {
      if (message.vote && message.vote === 'like') {
        this.forumService.deleteVote(this.id, message.id).subscribe({
          complete: () => {
            message.vote = null;
            message.nbLikes--;
          },
        });
      } else {
        this.forumService.likeMessage(this.id, message.id).subscribe({
          complete: () => {
            if (message.vote && message.vote === 'dislike') {
              message.nbDislikes--;
            }

            message.vote = 'like';
            message.nbLikes++;
          },
        });
      }
    }
  }

  onThumbDownClick(message: any): void {
    if (this.userSharedService.isLoggedIn) {
      if (message.vote && message.vote === 'dislike') {
        this.forumService.deleteVote(this.id, message.id).subscribe({
          complete: () => {
            message.vote = null;
            message.nbDislikes--;
          },
        });
      } else {
        this.forumService.dislikeMessage(this.id, message.id).subscribe({
          complete: () => {
            if (message.vote && message.vote === 'like') {
              message.nbLikes--;
            }

            message.vote = 'dislike';
            message.nbDislikes++;
          },
        });
      }
    }
  }
}
