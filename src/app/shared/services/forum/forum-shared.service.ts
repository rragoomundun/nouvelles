import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ForumSharedService {
  readonly API_PREFIX: string;

  forums: any[];
  currentForum: string | null;

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'forum';
  }

  get currentForumName(): string | null {
    if (this.currentForum && this.forums) {
      return this.forums.find((forum) => forum.label === this.currentForum)
        .name;
    }

    return null;
  }

  getForums(): Observable<any> {
    return this.http.get(`${this.API_PREFIX}/list`);
  }

  setForums() {
    this.getForums().subscribe({
      next: (value) => {
        this.forums = value;
      },
    });
  }
}
