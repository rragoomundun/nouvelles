import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { UserSharedService } from '../../../shared/services/user/user-shared.service';
import { CategorySharedService } from '../../../shared/services/category/category-shared.service';
import { UrlSharedService } from '../../../shared/services/url/url-shared.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() registerClick: EventEmitter<void>;
  @Output() loginCLick: EventEmitter<void>;
  @Output() logoutClick: EventEmitter<void>;

  constructor(
    public userSharedService: UserSharedService,
    public categorySharedService: CategorySharedService,
    public urlSharedService: UrlSharedService,
  ) {
    this.registerClick = new EventEmitter<void>();
    this.loginCLick = new EventEmitter<void>();
    this.logoutClick = new EventEmitter<void>();
  }

  get profileLink(): string | null {
    if (this.userSharedService.isLoggedIn) {
      return `/profile/${this.userSharedService.id}/${this.urlSharedService.toLowerURL(<string>this.userSharedService.name)}`;
    }

    return null;
  }

  onRegisterClick() {
    this.registerClick.emit();
  }

  onLoginClick() {
    this.loginCLick.emit();
  }

  onLogoutClick() {
    this.logoutClick.emit();
  }
}
