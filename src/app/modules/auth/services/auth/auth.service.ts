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

  registerConfirm(confirmationToken: string | null): Observable<any> {
    return this.http.put(
      `${this.API_PREFIX}/register/confirm/${confirmationToken}`,
      {},
      { withCredentials: true },
    );
  }

  passwordForgotten(params: any): Observable<any> {
    return this.http.post(`${this.API_PREFIX}/password/forgot`, params);
  }

  resetPassword(params: any, resetPasswordToken: string): Observable<any> {
    return this.http.put(
      `${this.API_PREFIX}/password/reset/${resetPasswordToken}`,
      params,
      {
        withCredentials: true,
      },
    );
  }
}
