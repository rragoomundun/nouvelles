import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly API_PREFIX: string;

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'user';
  }

  updateUserImage(userId: number, params: any): Observable<any> {
    const url = `${this.API_PREFIX}/${userId}/image`;
    return this.http.put(url, params, { withCredentials: true });
  }

  updatePassword(userId: number, params: any): Observable<any> {
    const url = `${this.API_PREFIX}/${userId}/password`;
    return this.http.put(url, params, { withCredentials: true });
  }
}
