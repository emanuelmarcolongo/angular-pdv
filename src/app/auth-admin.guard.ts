import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const authAdminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const user = localStorage.getItem('User');

  if (user && JSON.parse(user).type === 'ADM') {
    return true;
  } else {
    return inject(Router).createUrlTree(['/products/list']);
  }
};
