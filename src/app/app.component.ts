import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild(RegisterComponent) registerComponent!: RegisterComponent;

  constructor(public translate: TranslateService) {
    translate.addLangs(['fr']);
    translate.setDefaultLang('fr');
  }

  onRegisterClick() {
    this.registerComponent.open();
  }
}
