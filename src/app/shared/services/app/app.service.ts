import { Injectable } from '@angular/core';

import { appConfig } from '../../../app.config';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  readonly config: any;

  constructor() {
    this.config = appConfig;
  }
}
