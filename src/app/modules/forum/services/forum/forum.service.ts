import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForumService {
  readonly API_PREFIX: string;

  breadcrumbItems: { label: string; link?: string }[];

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

  getDiscussionMessages(discussionId: number, page: number): Observable<any> {
    const url = `${this.API_PREFIX}/discussion/${discussionId}/messages`;
    const params = { page };

    return this.http.get(url, { params, withCredentials: true });
  }

  postDiscussion(params: any): Observable<any> {
    return this.http.post(`${this.API_PREFIX}/discussion`, params, {
      withCredentials: true,
    });
  }

  postMessage(discussionId: number, params: any): Observable<any> {
    return this.http.post(
      `${this.API_PREFIX}/discussion/${discussionId}`,
      params,
      { withCredentials: true },
    );
  }

  editMessage(
    discussionId: number,
    messageId: number,
    params: any,
  ): Observable<any> {
    return this.http.put(
      `${this.API_PREFIX}/discussion/${discussionId}/message/${messageId}`,
      params,
      { withCredentials: true },
    );
  }

  likeMessage(discussionId: number, messageId: number): Observable<any> {
    return this.http.put(
      `${this.API_PREFIX}/discussion/${discussionId}/message/${messageId}/like`,
      {},
      { withCredentials: true },
    );
  }

  deleteVote(discussionId: number, messageId: number): Observable<any> {
    return this.http.delete(
      `${this.API_PREFIX}/discussion/${discussionId}/message/${messageId}/delete-vote`,
      { withCredentials: true },
    );
  }
}
