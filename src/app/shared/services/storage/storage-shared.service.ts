import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class StorageSharedService {
  constructor(private cookieService: CookieService) {}

  get(key: string) {
    return localStorage.getItem(key);
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  delete(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

  deleteCookie(
    name: string,
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite?: 'Lax' | 'None' | 'Strict',
  ) {
    this.cookieService.delete(name, path, domain, secure, sameSite);
  }
}
