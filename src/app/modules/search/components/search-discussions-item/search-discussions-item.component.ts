import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import removeMarkdown from 'remove-markdown';

import { UrlSharedService } from '../../../../shared/services/url/url-shared.service';
import { DateSharedService } from '../../../../shared/services/date/date-shared.service';

@Component({
    selector: 'app-search-discussions-item',
    imports: [RouterModule],
    templateUrl: './search-discussions-item.component.html',
    styleUrl: './search-discussions-item.component.scss'
})
export class SearchDiscussionsItemComponent implements OnInit {
  readonly MAX_MESSAGE_CHARACTERS;

  @Input() message: any;

  constructor(
    public urlSharedService: UrlSharedService,
    private dateSharedService: DateSharedService,
  ) {
    this.MAX_MESSAGE_CHARACTERS = 200;
  }

  ngOnInit(): void {
    this.message.content = removeMarkdown(this.message.content);

    if (this.message.content.length > this.MAX_MESSAGE_CHARACTERS) {
      this.message.content =
        this.message.content.substring(0, this.MAX_MESSAGE_CHARACTERS - 3) +
        '...';
    }

    const dateObj = new Date(this.message.date);
    this.message.dateFormatted = this.dateSharedService.dt
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
