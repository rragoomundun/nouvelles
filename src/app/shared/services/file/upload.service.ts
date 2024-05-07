import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  readonly API_PREFIX: string;

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'upload';
  }

  upload(file: File): Observable<any> {
    const formData = new FormData();

    formData.append('file', file);

    return this.http.post(this.API_PREFIX, formData, { withCredentials: true });
  }
}
