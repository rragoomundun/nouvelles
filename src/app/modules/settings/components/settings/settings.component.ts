import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { SettingsImageComponent } from '../settings-image/settings-image.component';
import { SettingsPasswordComponent } from '../settings-password/settings-password.component';
import { SettingsBiographyComponent } from '../settings-biography/settings-biography.component';
import { SettingsDeleteComponent } from '../settings-delete/settings-delete.component';

import { UserSharedService } from '../../../../shared/services/user/user-shared.service';
import { AppSharedService } from '../../../../shared/services/app/app-shared.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    TranslateModule,
    SettingsImageComponent,
    SettingsPasswordComponent,
    SettingsBiographyComponent,
    SettingsDeleteComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit {
  constructor(
    public userSharedService: UserSharedService,
    private appSharedService: AppSharedService,
  ) {}

  ngOnInit(): void {
    this.appSharedService.setTitle('HEADER.ACCOUNT.SETTINGS');
  }
}
