import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly API_PREFIX: string;

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'auth';
  }

  register(params: any): Observable<any> {
    return this.http.post(`${this.API_PREFIX}/register`, params);
  }

  registerConfirm(confirmationToken: string | null): Observable<any> {
    return this.http.put(
      `${this.API_PREFIX}/register/confirm/${confirmationToken}`,
      {},
      { withCredentials: true }
    );
  }

  login(params: any): Observable<any> {
    return this.http.post(`${this.API_PREFIX}/login`, params, {
      withCredentials: true,
    });
  }

  authorized(): Observable<any> {
    return this.http.get(`${this.API_PREFIX}/authorized`);
  }
}
