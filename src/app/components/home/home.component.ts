import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AppService } from '../../shared/services/app/app.service';
import { HomeService } from '../../shared/services/home/home.service';
import { UrlService } from '../../shared/services/url/url.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  frontArticles: any[];
  articlesByCategory: any[];
  mostViewedArticles: any[];

  constructor(
    private appService: AppService,
    private homeService: HomeService,
    public urlService: UrlService,
  ) {
    this.appService.setTitle('HOME_PAGE.TITLE');
  }

  ngOnInit(): void {
    this.homeService.getContent().subscribe({
      next: (value) => {
        this.frontArticles = value.frontArticles;
        this.articlesByCategory = value.articlesByCategories;
        this.mostViewedArticles = value.mostViewedArticles;
      },
    });
  }
}
