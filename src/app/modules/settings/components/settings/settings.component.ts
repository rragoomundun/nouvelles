import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { SettingsImageComponent } from '../settings-image/settings-image.component';
import { SettingsPasswordComponent } from '../settings-password/settings-password.component';
import { SettingsBiographyComponent } from '../settings-biography/settings-biography.component';

import { UserSharedService } from '../../../../shared/services/user/user-shared.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    TranslateModule,
    SettingsImageComponent,
    SettingsPasswordComponent,
    SettingsBiographyComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  constructor(public userSharedService: UserSharedService) {}
}
