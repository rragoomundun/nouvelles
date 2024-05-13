import { PLATFORM_ID, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';

export const isAdminOrRedactorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);
  const authService = inject(AuthService);
  const platformId = inject(PLATFORM_ID);

  return <Observable<boolean>>authService.authorizedAdminRedacteur().pipe(
    map(() => true),
    catchError(() => {
      if (isPlatformBrowser(platformId)) {
        router.navigate(['/']);
      }

      return of(false);
    }),
  );
};
