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

import { ProfileDiscussionsItemComponent } from '../profile-discussions-item/profile-discussions-item.component';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';

import { ProfileService } from '../../services/profile/profile.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-profile-discussions',
  standalone: true,
  imports: [
    TranslateModule,
    ProfileDiscussionsItemComponent,
    PaginationComponent,
  ],
  templateUrl: './profile-discussions.component.html',
  styleUrl: './profile-discussions.component.scss',
})
export class ProfileDiscussionsComponent implements OnInit, OnDestroy {
  discussions: any[];

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
    this.getDiscussions();

    this.routerEventsSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getDiscussions();
      });
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }

  getDiscussions(): void {
    this.userService
      .getUserDiscussions(this.profileService.userId, this.page)
      .subscribe({
        next: (value) => {
          this.discussions = value;

          if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }));
          }
        },
      });
  }
}
