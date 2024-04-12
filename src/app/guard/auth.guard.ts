import {CanActivateChildFn, CanActivateFn, CanMatchFn, Router} from '@angular/router';
import {inject} from "@angular/core";


export const authenticatedGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  return router.createUrlTree(['/login']);
};

export const canActivateGuard: CanActivateFn = (route, state) => {
  return true;
};


export const canActivateChildGuard: CanActivateChildFn = (route, state) => {
  return true;
};

export const canMatchGuard: CanMatchFn = (route, state) => {
  return true;
};
