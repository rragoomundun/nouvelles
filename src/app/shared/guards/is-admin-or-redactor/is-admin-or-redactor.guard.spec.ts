import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isAdminOrRedactorGuard } from './is-admin-or-redactor.guard';

describe('isAdminOrRedactorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isAdminOrRedactorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
