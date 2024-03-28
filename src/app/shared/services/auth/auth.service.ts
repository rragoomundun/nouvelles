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
}
