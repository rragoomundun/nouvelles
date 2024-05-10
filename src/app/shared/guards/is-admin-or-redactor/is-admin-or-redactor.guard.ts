import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UserService } from '../../services/user/user.service';

export const isAdminOrRedactorGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);

  if (
    userService.isLoggedIn &&
    (userService.roles?.includes('admin') ||
      userService.roles?.includes('redacteur'))
  ) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
