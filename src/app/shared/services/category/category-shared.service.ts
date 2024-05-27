import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategorySharedService {
  readonly API_PREFIX: string;

  categories: any[];

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'category';
  }

  getAllCategories(): Observable<any> {
    return this.http.get(`${this.API_PREFIX}/all`);
  }

  setAllCategories() {
    this.getAllCategories().subscribe({
      next: (value) => {
        this.categories = value;
      },
    });
  }
}
