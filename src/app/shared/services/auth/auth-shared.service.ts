import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { StorageSharedService } from '../storage/storage-shared.service';
import { UserSharedService } from '../user/user-shared.service';

@Injectable({
  providedIn: 'root',
})
export class AuthSharedService {
  readonly API_PREFIX: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private storageSharedService: StorageSharedService,
    private userSharedService: UserSharedService,
  ) {
    this.API_PREFIX = 'auth';
  }

  register(params: any): Observable<any> {
    return this.http.post(`${this.API_PREFIX}/register`, params);
  }

  login(params: any): Observable<any> {
    return this.http.post(`${this.API_PREFIX}/login`, params, {
      withCredentials: true,
    });
  }

  logout(): Observable<any> {
    return this.http.get(`${this.API_PREFIX}/logout`);
  }

  authorized(): Observable<any> {
    return this.http.get(`${this.API_PREFIX}/authorized`, {
      withCredentials: true,
    });
  }

  authorizedAdminRedacteur(): Observable<any> {
    return this.http.get(`${this.API_PREFIX}/authorized-admin-redacteur`, {
      withCredentials: true,
    });
  }

  doLogout(): void {
    this.logout().subscribe({
      complete: () => {
        this.userSharedService.id = null;
        this.userSharedService.name = null;
        this.userSharedService.email = null;
        this.userSharedService.image = null;
        this.userSharedService.roles = null;

        setTimeout(() => this.storageSharedService.clear());
        this.storageSharedService.deleteCookie('token', '/');

        const disabledRoutes = ['/article/nouveau', '/parametres'];
        const nouvelleDiscussionRegex = new RegExp(
          '/forum/[^/]+/discussion/nouvelle',
        );

        if (
          disabledRoutes.includes(this.router.url) ||
          nouvelleDiscussionRegex.test(this.router.url)
        ) {
          this.router.navigate(['/']);
        }
      },
    });
  }
}
