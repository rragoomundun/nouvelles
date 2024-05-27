import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { UserSharedService } from '../../../shared/services/user/user-shared.service';
import { CategorySharedService } from '../../../shared/services/category/category-shared.service';

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
  ) {
    this.registerClick = new EventEmitter<void>();
    this.loginCLick = new EventEmitter<void>();
    this.logoutClick = new EventEmitter<void>();
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
