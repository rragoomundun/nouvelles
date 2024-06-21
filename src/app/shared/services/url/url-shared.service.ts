import { Injectable } from '@angular/core';

import slugify from 'slugify';

@Injectable({
  providedIn: 'root',
})
export class UrlSharedService {
  constructor() {}

  toLowerURL(str: string): string {
    const slug = slugify(str, {
      strict: true,
      lower: true,
    });

    return slug;
  }
}
