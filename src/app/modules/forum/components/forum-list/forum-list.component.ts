import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ForumSharedService } from '../../../../shared/services/forum/forum-shared.service';
import { AppSharedService } from '../../../../shared/services/app/app-shared.service';

@Component({
    selector: 'app-forum-list',
    imports: [RouterModule, TranslateModule],
    templateUrl: './forum-list.component.html',
    styleUrl: './forum-list.component.scss'
})
export class ForumListComponent implements OnInit {
  constructor(
    private appSharedService: AppSharedService,
    public forumSharedService: ForumSharedService,
  ) {}

  ngOnInit(): void {
    this.appSharedService.setTitle('FORUM_PAGE.TITLE');
    this.forumSharedService.setForums();
  }
}
