import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription, filter } from 'rxjs';

import { ProfileArticlesItemComponent } from '../profile-articles-item/profile-articles-item.component';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';

import { UserService } from '../../services/user/user.service';
import { ProfileService } from '../../services/profile/profile.service';

@Component({
  selector: 'app-profile-articles',
  standalone: true,
  imports: [TranslateModule, ProfileArticlesItemComponent, PaginationComponent],
  templateUrl: './profile-articles.component.html',
  styleUrl: './profile-articles.component.scss',
})
export class ProfileArticlesComponent implements OnInit, OnDestroy {
  articles: any[];
  routerEventsSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public profileService: ProfileService,
    private userService: UserService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  get page(): number {
    return Number(this.activatedRoute.snapshot.queryParams['page'] || '1');
  }

  ngOnInit(): void {
    this.getUserArticles();

    this.routerEventsSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getUserArticles();
      });
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }

  getUserArticles(): void {
    this.userService
      .getUserArticles(this.profileService.userId, this.page)
      .subscribe({
        next: (value) => {
          this.articles = value;

          if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }));
          }
        },
      });
  }
}
