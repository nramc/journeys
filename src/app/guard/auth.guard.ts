import {CanActivateChildFn, CanActivateFn, CanMatchFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../service/auth/auth.service";
import {map} from "rxjs";
import {Role} from "../service/auth/role";


export const canActivateWhenAuthenticatedGuard: CanActivateFn = (route, state) => {
  return isUserAuthenticatedElseGetLogin();
};
export const canActivateWhenHasWriteAccessGuard: CanActivateFn = (route, state) => {
  return hasWriteAccessElseAccessDenied();
};


export const canActivateChildGuard: CanActivateChildFn = (route, state) => {
  return true;
};

export const canMatchWhenAuthenticatedGuard: CanMatchFn = (route, state) => {
  return isUserAuthenticatedElseGetLogin();
};

export const canMatchWhenHasWriteAccessGuard: CanMatchFn = (route, state) => {
  return hasWriteAccessElseAccessDenied();
};

function isUserAuthenticatedElseGetLogin() {
  let redirectUrl = inject(Router).getCurrentNavigation()?.initialUrl.toString();
  let loginUrl = inject(Router).createUrlTree(['/login'], {
    queryParams: {
      redirectUrl: redirectUrl
    }
  });
  return inject(AuthService).isUserAuthenticatedAsObservable()
    .pipe(map(authenticated => authenticated ? true : loginUrl));
}

function hasWriteAccessElseAccessDenied() {
  let accessDeniedUrl = inject(Router).createUrlTree(['/accessDenied']);
  return inject(AuthService).getUserContext()
    .pipe(map(userContext => userContext.roles
      .some(role => role == Role.MAINTAINER || role == Role.ADMINISTRATOR || role == Role.AUTHENTICATED_USER)
      ? true : accessDeniedUrl));
}
