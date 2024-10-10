import {CanActivateFn, CanMatchFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../service/auth/auth.service";
import {map} from "rxjs";
import {Role} from "../service/auth/role";


export const canActivateWhenAuthenticatedGuard: CanActivateFn = () => {
  return isUserAuthenticatedElseGetLogin();
};
export const canActivateWhenHasWriteAccessGuard: CanActivateFn = () => {
  return hasWriteAccessElseAccessDenied();
};
export const canMatchWhenAuthenticatedGuard: CanMatchFn = () => {
  return isUserAuthenticatedElseGetLogin();
};

export const canMatchWhenHasWriteAccessGuard: CanMatchFn = () => {
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
