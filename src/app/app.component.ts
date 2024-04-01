import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild(RegisterComponent) registerComponent!: RegisterComponent;

  constructor(public translate: TranslateService, private router: Router) {
    translate.addLangs(['fr']);
    translate.setDefaultLang('fr');
  }

  get showHeader(): boolean {
    return this.router.url.startsWith('/inscription/confirmer/') === false;
  }

  onRegisterClick() {
    this.registerComponent.open();
  }
}
