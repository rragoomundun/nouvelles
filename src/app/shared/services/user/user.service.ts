import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly API_PREFIX: string;

  id: number | null;
  name: string | null;
  email: string | null;
  image: string | null;
  roles: string[] | null;

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'user';
  }

  get isLoggedIn(): boolean {
    return this.id !== null && this.id !== undefined;
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.API_PREFIX}`, { withCredentials: true });
  }

  setUser() {
    this.getUser().subscribe({
      next: (value) => {
        this.id = value.id;
        this.name = value.name;
        this.email = value.email;
        this.image = value.image;
        this.roles = value.roles;
      },
    });
  }
}
