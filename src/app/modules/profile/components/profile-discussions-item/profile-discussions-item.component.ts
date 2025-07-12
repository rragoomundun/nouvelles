import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { DateTime } from 'luxon';

import { UrlSharedService } from '../../../../shared/services/url/url-shared.service';
import { DateSharedService } from '../../../../shared/services/date/date-shared.service';

@Component({
    selector: 'app-profile-discussions-item',
    imports: [RouterModule, TranslateModule],
    templateUrl: './profile-discussions-item.component.html',
    styleUrl: './profile-discussions-item.component.scss'
})
export class ProfileDiscussionsItemComponent implements OnInit {
  @Input() discussion: any;

  constructor(
    private urlSharedService: UrlSharedService,
    private dateSharedService: DateSharedService,
  ) {}

  get discussionLink(): string {
    return `/forum/${this.discussion.forum.label}/discussion/${this.discussion.id}/${this.urlSharedService.toLowerURL(this.discussion.name)}`;
  }

  ngOnInit(): void {
    const dateObj = new Date(this.discussion.firstMessageDate);
    this.discussion.dateFormatted = this.dateSharedService.dt
      .set({
        day: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear(),
        hour: dateObj.getHours(),
        minute: dateObj.getMinutes(),
      })
      .toFormat('dd/LL/yyyy, HH:mm');
  }
}
