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

  getUserProfile(userId: number): Observable<any> {
    return this.http.get(`${this.API_PREFIX}/${userId}`);
  }

  getUserArticles(userId: number, page: number): Observable<any> {
    const url = `${this.API_PREFIX}/${userId}/article/all`;
    const params = { page };

    return this.http.get(url, { params });
  }

  getUserDiscussions(userId: number, page: number): Observable<any> {
    const url = `${this.API_PREFIX}/${userId}/discussion/all`;
    const params = { page };

    return this.http.get(url, { params });
  }
}
