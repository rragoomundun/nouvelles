import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { marked } from 'marked';
import { DateTime } from 'luxon';

import { NotFoundComponent } from '../../../not-found/components/not-found/not-found.component';

import { ArticleSharedService } from '../../../../shared/services/article/article-shared.service';
import { ArticleService } from '../../../article/services/article/article.service';
import { DateSharedService } from '../../../../shared/services/date/date-shared.service';
import { UrlSharedService } from '../../../../shared/services/url/url-shared.service';
import { AppSharedService } from '../../../../shared/services/app/app-shared.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterLink, TranslateModule, NotFoundComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit {
  notFound: boolean;
  articleId: number;
  title: string;
  image: string;
  date: string;
  updatedDate: string;
  author: any;
  content: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appSharedService: AppSharedService,
    private articleSharedService: ArticleSharedService,
    private articleService: ArticleService,
    private dateSharedService: DateSharedService,
    public urlSharedService: UrlSharedService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  ngOnInit() {
    this.articleId = this.activatedRoute.snapshot.params['articleId'];

    this.articleSharedService.getArticle(this.articleId).subscribe({
      next: (value: any) => {
        const { title, image, date, updated_date, author, content, published } =
          value;

        this.notFound = false;

        this.title = title;
        this.image = image;
        this.author = author;
        this.content = <string>marked.parse(content);

        const dateObj = new Date(date);
        this.date = this.dateSharedService.dt
          .set({
            day: dateObj.getDate(),
            month: dateObj.getMonth() + 1,
            year: dateObj.getFullYear(),
          })
          .toLocaleString(DateTime.DATE_FULL);

        if (updated_date) {
          const updatedDateObj = new Date(updated_date);
          this.updatedDate = this.dateSharedService.dt
            .set({
              day: updatedDateObj.getDate(),
              month: updatedDateObj.getMonth() + 1,
              year: updatedDateObj.getFullYear(),
            })
            .toLocaleString(DateTime.DATE_FULL);
        }

        this.appSharedService.setTitle(this.title, false);

        if (published === true) {
          this.articleService.articleViewed(this.articleId).subscribe();
        }
      },
      error: (error: any) => {
        if (isPlatformBrowser(this.platformId)) {
          const { type } = error.error;

          if (type && type === 'NOT_FOUND') {
            this.notFound = true;
          }
        }
      },
    });
  }
}
