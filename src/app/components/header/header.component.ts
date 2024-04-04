import { Component, Output, EventEmitter } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { UserService } from '../../shared/services/user/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() registerClick: EventEmitter<void>;
  @Output() loginCLick: EventEmitter<void>;
  @Output() logoutClick: EventEmitter<void>;

  constructor(public userService: UserService) {
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
