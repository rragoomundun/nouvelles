import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  readonly API_PREFIX: string;

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'article';
  }

  getArticleCategoryMeta(category: string): Observable<any> {
    const url = `${this.API_PREFIX}/by-category/meta`;
    const params = { category };

    return this.http.get(url, { params });
  }

  getArticleByCategory(category: string, page: number): Observable<any> {
    const url = `${this.API_PREFIX}/by-category`;
    const params = { category, page };

    return this.http.get(url, { params });
  }

  articleViewed(articleId: number): Observable<any> {
    const url = `${this.API_PREFIX}/${articleId}/viewed`;
    return this.http.put(url, {});
  }

  isUserOwner(articleId: number): Observable<any> {
    const url = `${this.API_PREFIX}/${articleId}/is-user-owner`;
    return this.http.get(url, { withCredentials: true });
  }
}
