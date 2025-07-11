import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { RouterLink, Router } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { UserSharedService } from '../../../shared/services/user/user-shared.service';
import { CategorySharedService } from '../../../shared/services/category/category-shared.service';
import { UrlSharedService } from '../../../shared/services/url/url-shared.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Output() registerClick: EventEmitter<void>;
  @Output() loginCLick: EventEmitter<void>;
  @Output() logoutClick: EventEmitter<void>;

  searchForm: FormGroup;

  constructor(
    private router: Router,
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

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      query: new FormControl(''),
    });
  }

  hideHamburgerMenu(): void {
    const navbarTogglerEl = <HTMLButtonElement>(
      document.querySelector('.navbar-toggler')
    );

    if (navbarTogglerEl) {
      navbarTogglerEl.click();
    }
  }

  @HostListener('window:click', ['$event'])
  onWindowClick(event: any): void {
    const header = document.querySelector('header');
    const navbarTogglerEl = document.querySelector(
      '.navbar-collapse.collapse.show',
    );

    if (
      header?.contains(event.target) === false &&
      navbarTogglerEl &&
      window.innerWidth < 992
    ) {
      this.hideHamburgerMenu();
    }
  }

  onRegisterClick() {
    this.registerClick.emit();
  }

  onLoginClick() {
    this.loginCLick.emit();
  }

  onLogoutClick() {
    this.logoutClick.emit();
    this.hideHamburgerMenu();
  }

  onSearchSubmit(event: any) {
    event.preventDefault();

    const query = this.searchForm.controls['query'].value;

    if (query) {
      if (this.router.url.includes('/rechercher')) {
        const event = new CustomEvent('headerSearch', {
          bubbles: true,
          cancelable: true,
          detail: {
            query,
          },
        });

        document.dispatchEvent(event);
      } else {
        this.router.navigate(['/rechercher'], { queryParams: { query } });
        this.hideHamburgerMenu();
      }

      this.searchForm.controls['query'].setValue('');
    }
  }
}
