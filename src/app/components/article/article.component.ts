import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { NotFoundComponent } from '../not-found/not-found.component';

import { ArticleService } from '../../shared/services/article/article.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [RouterLink, NotFoundComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent implements OnInit {
  notFound: boolean;
  articleId: number;
  title: string;
  image: string;
  date: Date;
  updatedDate: Date;
  author: any;
  content: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
  ) {}

  ngOnInit() {
    this.articleId = this.activatedRoute.snapshot.params['articleId'];

    this.articleService.getArticle(this.articleId).subscribe({
      next: (value) => {
        const { title, image, date, updatedDate, author, content } = value;

        this.notFound = false;

        this.title = title;
        this.image = image;
        this.date = date;
        this.updatedDate = updatedDate;
        this.author = author;
        this.content = content;

        console.log(this.author);
        console.log(this.date);
      },
      error: (value) => {
        if (value.status === 404) {
          this.notFound = true;
        }
      },
    });
  }
}
