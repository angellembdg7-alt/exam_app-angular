import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const userRole = localStorage.getItem('role');
  const required = route.data['role'] as string;
  if (userRole === required) return true;
  router.navigate(['/dashboard']);
  return false;
};
