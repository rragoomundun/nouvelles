import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import removeMarkdown from 'remove-markdown';

import { UrlSharedService } from '../../../../shared/services/url/url-shared.service';
import { DateSharedService } from '../../../../shared/services/date/date-shared.service';

@Component({
  selector: 'app-profile-messages-item',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './profile-messages-item.component.html',
  styleUrl: './profile-messages-item.component.scss',
})
export class ProfileMessagesItemComponent implements OnInit {
  readonly MAX_MESSAGE_CHARACTERS;

  @Input() message: any;

  constructor(
    private urlSharedService: UrlSharedService,
    private dateSharedService: DateSharedService,
  ) {
    this.MAX_MESSAGE_CHARACTERS = 200;
  }

  get discussionLink(): string {
    return `/forum/${this.message.forum.label}/discussion/${this.message.discussion.id}/${this.urlSharedService.toLowerURL(this.message.discussion.name)}`;
  }

  get fragment(): string {
    return `message-${this.message.id}`;
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
