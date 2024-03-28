import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

export function globalInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const { url } = req;

  if (url.includes('assets')) {
    return next(req);
  }

  const newRequest = {
    url: `${environment.API_URL}/${url}`,
  };

  return next(req.clone(newRequest));
}
