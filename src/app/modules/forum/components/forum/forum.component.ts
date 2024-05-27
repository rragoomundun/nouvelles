import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ForumSharedService } from '../../../../shared/services/forum/forum-shared.service';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss',
})
export class ForumComponent implements OnInit, OnDestroy {
  routerEventsSubscription: Subscription;
  currentForum: string | null;

  constructor(
    private router: Router,
    public forumSharedService: ForumSharedService,
  ) {}

  get currentForumName(): string | null {
    if (this.currentForum && this.forumSharedService.forums) {
      return this.forumSharedService.forums.find(
        (forum) => forum.label === this.currentForum,
      ).name;
    }

    return null;
  }

  get onDiscussions(): boolean {
    let regex = new RegExp('/forum/[^/]+$');
    return regex.test(this.router.url);
  }

  ngOnInit(): void {
    this.setCurrentForum();

    this.routerEventsSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setCurrentForum();
      });
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
  }

  setCurrentForum() {
    let regex = new RegExp('/forum/.+$');

    if (regex.test(this.router.url)) {
      this.currentForum = this.router.url.split('/')[2].split('?')[0];
    } else {
      this.currentForum = null;
    }
  }
}
