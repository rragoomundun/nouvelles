import { Injectable } from '@angular/core';

import removeAccents from 'remove-accents';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor() {}

  toLowerURL(url: string): string {
    return removeAccents(
      url
        .toLowerCase()
        .replaceAll(' ', '-')
        .replaceAll("'", '-')
        .replaceAll('’', '-')
        .replaceAll('«', '')
        .replaceAll('»', '')
        .replaceAll(',', '')
        .replaceAll('(', '')
        .replaceAll(')', '')
        .replaceAll('.', '')
        .replaceAll('-:-', '-')
        .replaceAll('--', '-'),
    );
  }
}
