import { PLATFORM_ID, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AuthSharedService } from '../../../shared/services/auth/auth-shared.service';

export const isAdminOrRedactorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authSharedService = inject(AuthSharedService);
  const platformId = inject(PLATFORM_ID);

  return <Observable<boolean>>authSharedService.authorizedAdminRedacteur().pipe(
    map(() => true),
    catchError(() => {
      if (isPlatformBrowser(platformId)) {
        router.navigate(['/']);
      }

      return of(false);
    }),
  );
};
