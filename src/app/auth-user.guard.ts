import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const authUserGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const user = localStorage.getItem('User');
  if (user) {
    return true;
  } else {
    return inject(Router).createUrlTree(['/auth/login']);
  }
};
