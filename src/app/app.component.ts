import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { UserService } from './shared/services/user/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RegisterComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild(RegisterComponent) registerComponent!: RegisterComponent;
  @ViewChild(LoginComponent) loginComponent!: LoginComponent;

  constructor(
    public translate: TranslateService,
    private router: Router,
    public userService: UserService
  ) {
    translate.addLangs(['fr']);
    translate.setDefaultLang('fr');
  }

  get showHeader(): boolean {
    return this.router.url.startsWith('/inscription/confirmer/') === false;
  }

  ngOnInit() {
    this.userService.setUser();
  }

  onRegisterClick() {
    this.registerComponent.open();
  }

  onLoginClick() {
    this.loginComponent.open();
  }
}
