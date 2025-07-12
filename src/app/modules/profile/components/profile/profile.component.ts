import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterModule,
} from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription, filter } from 'rxjs';

import { marked } from 'marked';

import { NavPanelComponent } from '../../../../shared/components/nav-panel/nav-panel.component';
import { NotFoundComponent } from '../../../not-found/components/not-found/not-found.component';

import { ProfileService } from '../../services/profile/profile.service';
import { UserService } from '../../services/user/user.service';
import { DateSharedService } from '../../../../shared/services/date/date-shared.service';
import { AppSharedService } from '../../../../shared/services/app/app-shared.service';
import { UrlSharedService } from '../../../../shared/services/url/url-shared.service';

@Component({
    selector: 'app-profile',
    imports: [
        TranslateModule,
        RouterModule,
        NavPanelComponent,
        NotFoundComponent,
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy {
  name: string;
  image: string;
  nbArticles: number;
  nbDiscussions: number;
  nbMessages: number;
  biography: string | null;
  registrationDate: string;
  roles: string[];

  onGetUserProfile: string;

  previousRoute: string;
  routerEventsSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService,
    public profileService: ProfileService,
    private userService: UserService,
    private dateSharedService: DateSharedService,
    private appSharedService: AppSharedService,
    private urlSharedService: UrlSharedService,
  ) {}

  get profileLink(): string {
    return `/profile/${this.profileService.userId}/${this.urlSharedService.toLowerURL(this.name)}`;
  }

  get navPanelLinks(): { link: string; title: string }[] {
    const links: { link: string; title: string }[] = [
      {
        link: this.profileLink,
        title: this.translateService.instant('GENERAL.BIOGRAPHY'),
      },
      {
        link: `${this.profileLink}/discussions`,
        title: this.translateService.instant('GENERAL.DISCUSSIONS'),
      },
      {
        link: `${this.profileLink}/messages`,
        title: this.translateService.instant('GENERAL.MESSAGES'),
      },
    ];

    if (this.roles.includes('admin') || this.roles.includes('redacteur')) {
      links.splice(
        1,
        0,

        {
          link: `${this.profileLink}/articles`,
          title: this.translateService.instant('GENERAL.ARTICLES'),
        },
      );
    }

    return links;
  }

  get onBiography(): boolean {
    const regex = new RegExp('/profile/[0-9]+/[^/]+$');
    return regex.test(this.router.url);
  }

  ngOnInit(): void {
    this.loadProfile();

    this.previousRoute = this.router.url;

    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.previousRoute = this.router.url;
      } else if (event instanceof NavigationEnd) {
        const regex = new RegExp('/profile/[0-9]+/[^/]+');

        if (
          this.onBiography &&
          this.previousRoute.match(regex)![0] !== this.router.url
        ) {
          this.loadProfile();
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }

  loadProfile() {
    this.profileService.userId = this.activatedRoute.snapshot.params['userId'];
    this.onGetUserProfile = 'true';

    this.userService.getUserProfile(this.profileService.userId).subscribe({
      next: (value) => {
        this.name = value.name;
        this.image = value.image;
        this.nbArticles = value.nbArticles;
        this.nbDiscussions = value.nbDiscussions;
        this.nbMessages = value.nbMessages;
        this.roles = value.roles;

        this.profileService.articlesNbPages = value.articlesNbPages;
        this.profileService.discussionsNbPages = value.discussionsNbPages;
        this.profileService.messagesNbPages = value.messagesNbPages;

        if (value.biography) {
          this.biography = <string>marked.parse(value.biography);
        } else {
          this.biography = null;
        }

        const dateObj = new Date(value.registrationDate);
        this.registrationDate = this.dateSharedService.dt
          .set({
            day: dateObj.getDate(),
            month: dateObj.getMonth() + 1,
            year: dateObj.getFullYear(),
          })
          .toFormat('d MMMM yyyy');

        this.appSharedService.setTitle(this.name);

        this.onGetUserProfile = 'success';
      },
      error: () => {
        this.onGetUserProfile = 'error';
      },
    });
  }
}
