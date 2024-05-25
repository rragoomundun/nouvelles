import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { marked } from 'marked';
import { DateTime } from 'luxon';

import { NotFoundComponent } from '../../../not-found/components/not-found/not-found.component';

import { ArticleService } from '../../../../shared/services/article/article.service';
import { DateService } from '../../../../shared/services/date/date.service';
import { UrlService } from '../../../../shared/services/url/url.service';
import { AppService } from '../../../../shared/services/app/app.service';

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
    private appService: AppService,
    private articleService: ArticleService,
    private dateService: DateService,
    public urlService: UrlService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  ngOnInit() {
    this.articleId = this.activatedRoute.snapshot.params['articleId'];

    this.articleService.getArticle(this.articleId).subscribe({
      next: (value: any) => {
        const { title, image, date, updated_date, author, content, published } =
          value;

        this.notFound = false;

        this.title = title;
        this.image = image;
        this.author = author;
        this.content = <string>marked.parse(content);

        const dateObj = new Date(date);
        this.date = this.dateService.dt
          .set({
            day: dateObj.getDate(),
            month: dateObj.getMonth() + 1,
            year: dateObj.getFullYear(),
          })
          .toLocaleString(DateTime.DATE_FULL);

        if (updated_date) {
          const updatedDateObj = new Date(updated_date);
          this.updatedDate = this.dateService.dt
            .set({
              day: updatedDateObj.getDate(),
              month: updatedDateObj.getMonth() + 1,
              year: updatedDateObj.getFullYear(),
            })
            .toLocaleString(DateTime.DATE_FULL);
        }

        this.appService.setTitle(this.title, false);

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
