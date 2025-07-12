import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';

import { SearchDiscussionsItemComponent } from '../search-discussions-item/search-discussions-item.component';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';

import { SearchService } from '../../services/search/search.service';

@Component({
    selector: 'app-search-discussions',
    imports: [
        TranslateModule,
        SearchDiscussionsItemComponent,
        PaginationComponent,
    ],
    templateUrl: './search-discussions.component.html',
    styleUrl: './search-discussions.component.scss'
})
export class SearchDiscussionsComponent implements OnInit, OnDestroy {
  @Input() query: string;

  queryParamsSubscription: Subscription;
  messages: any[];
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
    this.getDiscussions();

    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe({
      next: () => {
        this.getMetaInformation();
        this.getDiscussions();
      },
    });
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  getDiscussions(): void {
    const params = { query: this.query, page: this.page };

    this.searchService.searchDiscussions(params).subscribe({
      next: (value: any[]) => {
        this.messages = value;

        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }));
        }
      },
    });
  }

  getMetaInformation(): void {
    const params = { query: this.query };

    this.searchService.searchDiscussionsMeta(params).subscribe({
      next: (value: any) => {
        this.nbPages = value.nbPages;
      },
    });
  }
}
