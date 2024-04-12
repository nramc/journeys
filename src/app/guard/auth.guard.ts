import {CanActivateChildFn, CanActivateFn, CanMatchFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../service/auth/auth.service";
import {map} from "rxjs";


export const canActivateWhenAuthenticatedGuard: CanActivateFn = (route, state) => {
  let loginUrl = inject(Router).createUrlTree(['/login']);
  return inject(AuthService).isUserAuthenticatedAsObservable()
    .pipe(map(authenticated => authenticated ? true : loginUrl));
};

export const canActivateGuard: CanActivateFn = (route, state) => {
  return true;
};


export const canActivateChildGuard: CanActivateChildFn = (route, state) => {
  return true;
};

export const canMatchWhenAuthenticatedGuard: CanMatchFn = (route, state) => {
  return inject(AuthService).isUserAuthenticatedAsObservable();
};
