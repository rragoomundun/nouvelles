import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { RegisterComponent } from './core/components/register/register.component';
import { LoginComponent } from './core/components/login/login.component';

import { CategorySharedService } from './shared/services/category/category-shared.service';
import { UserSharedService } from './shared/services/user/user-shared.service';
import { AuthSharedService } from './shared/services/auth/auth-shared.service';
import { StorageSharedService } from './shared/services/storage/storage-shared.service';
import { ForumSharedService } from './shared/services/forum/forum-shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild(RegisterComponent) registerComponent!: RegisterComponent;
  @ViewChild(LoginComponent) loginComponent!: LoginComponent;

  constructor(
    public translate: TranslateService,
    private router: Router,
    private categorySharedService: CategorySharedService,
    private forumSharedService: ForumSharedService,
    public userSharedService: UserSharedService,
    private authSharedService: AuthSharedService,
    private storageSharedService: StorageSharedService,
  ) {
    translate.addLangs(['fr']);
    translate.setDefaultLang('fr');
    translate.use('fr');
  }

  get showHeaderFooter(): boolean {
    return (
      this.router.url.startsWith('/inscription/confirmer/') === false &&
      this.router.url !== '/auth/mot-de-passe-oublie' &&
      this.router.url.startsWith('/auth/mot-de-passe/reinitialiser/') === false
    );
  }

  ngOnInit(): void {
    this.categorySharedService.setAllCategories();
    this.forumSharedService.setForums();
    this.userSharedService.setUser();
  }

  logout(): void {
    this.authSharedService.logout().subscribe({
      complete: () => {
        this.userSharedService.id = null;
        this.userSharedService.name = null;
        this.userSharedService.email = null;
        this.userSharedService.image = null;
        this.userSharedService.roles = null;

        setTimeout(() => this.storageSharedService.clear());
        this.storageSharedService.deleteCookie('token', '/');
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
