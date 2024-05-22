import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ForumService } from '../../shared/services/forum/forum.service';
import { AppService } from '../../shared/services/app/app.service';

@Component({
  selector: 'app-forum-list',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './forum-list.component.html',
  styleUrl: './forum-list.component.scss',
})
export class ForumListComponent implements OnInit {
  constructor(
    private appService: AppService,
    public forumService: ForumService,
  ) {}

  ngOnInit(): void {
    this.appService.setTitle('FORUM_PAGE.TITLE');
    this.forumService.setForums();
  }
}
