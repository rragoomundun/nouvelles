import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileSharedService {
  readonly API_PREFIX: string;

  constructor(private http: HttpClient) {
    this.API_PREFIX = 'file';
  }

  upload(file: File, params?: any): Observable<any> {
    const formData = new FormData();

    formData.append('file', file);

    if (params) {
      for (const paramName in params) {
        formData.append(paramName, params[paramName]);
      }
    }

    return this.http.post(this.API_PREFIX, formData, { withCredentials: true });
  }

  delete(params: any): Observable<any> {
    return this.http.delete(this.API_PREFIX, {
      body: params,
      withCredentials: true,
    });
  }
}
