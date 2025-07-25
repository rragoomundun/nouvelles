import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
} from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { NotFoundComponent } from '../../../not-found/components/not-found/not-found.component';

import { ArticleService } from '../../../article/services/article/article.service';
import { AppSharedService } from '../../../../shared/services/app/app-shared.service';
import { UrlSharedService } from '../../../../shared/services/url/url-shared.service';

@Component({
    selector: 'app-category',
    imports: [
        RouterLink,
        TranslateModule,
        PaginationComponent,
        NotFoundComponent,
    ],
    templateUrl: './category.component.html',
    styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit, OnDestroy {
  routerEventsSubscription: Subscription;
  articles: any[];
  categoryName: string;
  totalArticles: number;
  nbPages: number;
  notFound: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private appSharedService: AppSharedService,
    public urlSharedService: UrlSharedService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  ngOnInit(): void {
    this.getMetaInformation();
    this.getArticles();

    // Load again when the user navigate to another category
    this.routerEventsSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let regex = new RegExp('/categorie/.[^/]*$');

        if (regex.test(this.router.url)) {
          this.getMetaInformation();
          this.getArticles();
        }
      });
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }

  get category(): string {
    return this.activatedRoute.snapshot.url[0].path;
  }

  get page(): number {
    return Number(this.activatedRoute.snapshot.queryParams['page'] || '1');
  }

  getArticles() {
    this.articleService
      .getArticleByCategory(this.category, this.page)
      .subscribe({
        next: (value) => {
          this.articles = value;

          if (this.articles.length) {
            this.notFound = false;

            if (isPlatformBrowser(this.platformId)) {
              setTimeout(() =>
                window.scrollTo({ top: 0, behavior: 'instant' }),
              );
            }
          } else {
            this.notFound = true;
          }
        },
        error: (value) => {
          if (value.status === 404) {
            this.notFound = true;
          }
        },
      });
  }

  getMetaInformation() {
    this.articleService.getArticleCategoryMeta(this.category).subscribe({
      next: (value) => {
        if (this.page <= value.nbPages) {
          this.categoryName = value.categoryName;
          this.totalArticles = value.totalArticles;
          this.nbPages = value.nbPages;
          this.notFound = false;

          this.appSharedService.setTitle(this.categoryName, false);
        } else {
          this.notFound = true;
        }
      },
    });
  }
}
