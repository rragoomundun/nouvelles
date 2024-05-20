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
