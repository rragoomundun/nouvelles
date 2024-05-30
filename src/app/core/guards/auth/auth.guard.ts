import { PLATFORM_ID, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AuthSharedService } from '../../../shared/services/auth/auth-shared.service';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authSharedService = inject(AuthSharedService);
  const platformId = inject(PLATFORM_ID);

  return <Observable<boolean>>authSharedService.authorized().pipe(
    map(() => true),
    catchError(() => {
      if (isPlatformBrowser(platformId)) {
        router.navigate(['/']);
      }

      return of(false);
    }),
  );
};
