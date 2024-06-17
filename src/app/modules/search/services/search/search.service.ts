import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  readonly API_PREFIX: string;

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'search';
  }

  searchArticles(params: any): Observable<any> {
    return this.http.get(`${this.API_PREFIX}/articles`, { params });
  }

  searchArticlesMeta(params: any): Observable<any> {
    return this.http.get(`${this.API_PREFIX}/articles/meta`, { params });
  }

  searchDiscussions(params: any): Observable<any> {
    return this.http.get(`${this.API_PREFIX}/discussions`, { params });
  }

  searchDiscussionsMeta(params: any): Observable<any> {
    return this.http.get(`${this.API_PREFIX}/discussions/meta`, { params });
  }
}
