import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { DateTime } from 'luxon';

import { UrlSharedService } from '../../../../shared/services/url/url-shared.service';
import { DateSharedService } from '../../../../shared/services/date/date-shared.service';

@Component({
  selector: 'app-profile-articles-item',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './profile-articles-item.component.html',
  styleUrl: './profile-articles-item.component.scss',
})
export class ProfileArticlesItemComponent implements OnInit {
  @Input() article: any;

  constructor(
    private urlSharedService: UrlSharedService,
    private dateSharedService: DateSharedService,
  ) {}

  get articleLink(): string {
    return `/categorie/${this.article.category.label}/article/${this.article.id}/${this.urlSharedService.toLowerURL(this.article.title)}`;
  }

  ngOnInit(): void {
    const dateObj = new Date(this.article.date);
    this.article.dateFormatted = this.dateSharedService.dt
      .set({
        day: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear(),
      })
      .toLocaleString(DateTime.DATE_FULL);
  }
}
