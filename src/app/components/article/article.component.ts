import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { DateTime } from 'luxon';

import { NotFoundComponent } from '../not-found/not-found.component';

import { ArticleService } from '../../shared/services/article/article.service';
import { DateService } from '../../shared/services/date/date.service';
import { UrlService } from '../../shared/services/url/url.service';

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
    private articleService: ArticleService,
    private dateService: DateService,
    public urlService: UrlService,
  ) {}

  ngOnInit() {
    this.articleId = this.activatedRoute.snapshot.params['articleId'];

    this.articleService.getArticle(this.articleId).subscribe({
      next: (value) => {
        const { title, image, date, updatedDate, author, content } = value;

        this.notFound = false;

        this.title = title;
        this.image = image;
        this.author = author;
        this.content = content;

        const dateObj = new Date(date);
        this.date = this.dateService.dt
          .set({
            day: dateObj.getDate(),
            month: dateObj.getMonth() + 1,
            year: dateObj.getFullYear(),
          })
          .toLocaleString(DateTime.DATE_FULL);

        if (updatedDate) {
          const updatedDateObj = new Date(updatedDate);
          this.updatedDate = this.dateService.dt
            .set({
              day: updatedDateObj.getDate(),
              month: updatedDateObj.getMonth() + 1,
              year: updatedDateObj.getFullYear(),
            })
            .toLocaleString(DateTime.DATE_FULL);
        }
      },
      error: (value) => {
        if (value.status === 404) {
          this.notFound = true;
        }
      },
    });
  }
}
