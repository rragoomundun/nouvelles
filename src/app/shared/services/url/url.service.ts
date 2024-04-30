import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor() {}

  toLowerURL(url: string): string {
    return url.toLowerCase().replaceAll(' ', '-');
  }
}
