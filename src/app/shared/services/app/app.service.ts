import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { appConfig } from '../../../app.config';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  readonly config: any;

  constructor(
    private titleService: Title,
    private translateService: TranslateService,
  ) {
    this.config = appConfig;
  }

  setTitle(title: string, translate = true) {
    if (translate) {
      this.titleService.setTitle(
        `${this.translateService.instant(
          title,
        )} - ${this.translateService.instant('GENERAL.TITLE')}`,
      );
    } else {
      this.titleService.setTitle(
        `${title} - ${this.translateService.instant('GENERAL.TITLE')}`,
      );
    }
  }
}
