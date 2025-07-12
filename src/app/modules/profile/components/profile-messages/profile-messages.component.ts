import {
  Component,
  OnDestroy,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription, filter } from 'rxjs';

import { ProfileMessagesItemComponent } from '../profile-messages-item/profile-messages-item.component';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';

import { ProfileService } from '../../services/profile/profile.service';
import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-profile-messages',
    imports: [TranslateModule, ProfileMessagesItemComponent, PaginationComponent],
    templateUrl: './profile-messages.component.html',
    styleUrl: './profile-messages.component.scss'
})
export class ProfileMessagesComponent implements OnInit, OnDestroy {
  messages: any[];

  routerEventsSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public profileService: ProfileService,
    private userService: UserService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  get page(): number {
    return Number(this.activatedRoute.snapshot.queryParams['page'] || '1');
  }

  ngOnInit(): void {
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

  getMessages(): void {
    this.userService
      .getUserMessages(this.profileService.userId, this.page)
      .subscribe({
        next: (value) => {
          this.messages = value;

          if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }));
          }
        },
      });
  }
}
