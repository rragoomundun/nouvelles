import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthSharedService {
  readonly API_PREFIX: string;

  constructor(private http: HttpClient) {
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
}
