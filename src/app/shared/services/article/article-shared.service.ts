import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleSharedService {
  readonly API_PREFIX: string;

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'article';
  }

  getArticle(articleId: number): Observable<any> {
    const url = `${this.API_PREFIX}/${articleId}`;
    return this.http.get(url, { withCredentials: true });
  }

  postArticle(params: any): Observable<any> {
    return this.http.post(this.API_PREFIX, params, { withCredentials: true });
  }
}
