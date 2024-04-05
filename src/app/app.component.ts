import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { UserService } from './shared/services/user/user.service';
import { AuthService } from './shared/services/auth/auth.service';
import { StorageService } from './shared/services/storage/storage.service';

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
    public userService: UserService,
    private authService: AuthService,
    private storageService: StorageService
  ) {
    translate.addLangs(['fr']);
    translate.setDefaultLang('fr');
  }

  get showHeader(): boolean {
    return (
      this.router.url.startsWith('/inscription/confirmer/') === false &&
      this.router.url !== '/auth/mot-de-passe-oublie' &&
      this.router.url.startsWith('/auth/mot-de-passe/reinitialiser/') === false
    );
  }

  ngOnInit(): void {
    this.userService.setUser();
  }

  logout(): void {
    this.authService.logout().subscribe({
      complete: () => {
        this.userService.id = null;
        this.userService.name = null;
        this.userService.email = null;
        this.userService.image = null;
        this.userService.roles = null;

        setTimeout(() => this.storageService.clear());
        this.storageService.deleteCookie('token', '/');
      },
    });
  }

  onRegisterClick(): void {
    this.registerComponent.open();
  }

  onLoginClick(): void {
    this.loginComponent.open();
  }

  onLogoutClick(): void {
    this.logout();
  }
}
