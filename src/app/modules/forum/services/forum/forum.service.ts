import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForumService {
  readonly API_PREFIX: string;

  forums: any[];

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'forum';
  }

  getForumMeta(forum: string): Observable<any> {
    const url = `${this.API_PREFIX}/${forum}/meta`;
    return this.http.get(url);
  }

  getDiscussions(forum: string, page: number): Observable<any> {
    const url = `${this.API_PREFIX}/${forum}/discussions`;
    const params = { page };

    return this.http.get(url, { params });
  }

  getDiscussionMeta(forum: string, discussionId: number): Observable<any> {
    return this.http.get(
      `${this.API_PREFIX}/${forum}/discussion/${discussionId}/meta`,
    );
  }

  getDiscussionMessage(discussionId: number, page: number): Observable<any> {
    const url = `${this.API_PREFIX}/discussion/${discussionId}/messages`;
    const params = { page };

    return this.http.get(url, { params });
  }

  postDiscussion(params: any): Observable<any> {
    return this.http.post(`${this.API_PREFIX}/discussion`, params, {
      withCredentials: true,
    });
  }
}
