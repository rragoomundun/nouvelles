import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AppSharedService } from '../../../../shared/services/app/app-shared.service';
import { HomeService } from '../../services/home/home.service';
import { UrlSharedService } from '../../../../shared/services/url/url-shared.service';

@Component({
    selector: 'app-home',
    imports: [RouterLink, TranslateModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  frontArticles: any[];
  articlesByCategory: any[];
  mostViewedArticles: any[];

  constructor(
    private appSharedService: AppSharedService,
    private homeService: HomeService,
    public urlSharedService: UrlSharedService,
  ) {
    this.appSharedService.setTitle('HOME_PAGE.TITLE');
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
