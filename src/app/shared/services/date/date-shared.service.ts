import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root',
})
export class DateSharedService {
  readonly dt: DateTime;
  readonly lang: string;

  constructor(private translateService: TranslateService) {
    this.lang = this.translateService.currentLang;
    this.dt = DateTime.local({ locale: this.lang });
  }
}
