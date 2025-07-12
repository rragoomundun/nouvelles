import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { RegisterComponent } from './core/components/register/register.component';
import { LoginComponent } from './core/components/login/login.component';

import { CategorySharedService } from './shared/services/category/category-shared.service';
import { UserSharedService } from './shared/services/user/user-shared.service';
import { AuthSharedService } from './shared/services/auth/auth-shared.service';
import { ForumSharedService } from './shared/services/forum/forum-shared.service';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        RegisterComponent,
        LoginComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @ViewChild(RegisterComponent) registerComponent!: RegisterComponent;
  @ViewChild(LoginComponent) loginComponent!: LoginComponent;

  constructor(
    public translate: TranslateService,
    private categorySharedService: CategorySharedService,
    private forumSharedService: ForumSharedService,
    public userSharedService: UserSharedService,
    private authSharedService: AuthSharedService,
  ) {
    translate.addLangs(['fr']);
    translate.setDefaultLang('fr');
    translate.use('fr');
  }

  ngOnInit(): void {
    this.categorySharedService.setAllCategories();
    this.forumSharedService.setForums();
    this.userSharedService.setUser();
  }

  logout(): void {
    this.authSharedService.doLogout();
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
