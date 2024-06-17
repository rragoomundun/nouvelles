import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';

import { SearchArticlesItemComponent } from '../search-articles-item/search-articles-item.component';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';

import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-search-articles',
  standalone: true,
  imports: [TranslateModule, SearchArticlesItemComponent, PaginationComponent],
  templateUrl: './search-articles.component.html',
  styleUrl: './search-articles.component.scss',
})
export class SearchArticlesComponent implements OnInit, OnDestroy {
  @Input() query: string;

  queryParamsSubscription: Subscription;
  articles: any[];
  nbPages: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  get page(): number {
    return Number(this.activatedRoute.snapshot.queryParams['page'] || '1');
  }

  ngOnInit(): void {
    this.getMetaInformation();
    this.getArticles();

    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe({
      next: () => {
        this.getMetaInformation();
        this.getArticles();
      },
    });
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  getArticles(): void {
    const params = { query: this.query, page: this.page };

    this.searchService.searchArticles(params).subscribe({
      next: (value: any[]) => {
        this.articles = value;

        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }));
        }
      },
    });
  }

  getMetaInformation(): void {
    const params = { query: this.query };

    this.searchService.searchArticlesMeta(params).subscribe({
      next: (value: any) => {
        this.nbPages = value.nbPages;
      },
    });
  }
}
