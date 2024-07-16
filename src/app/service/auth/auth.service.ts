import {Injectable} from '@angular/core';
import {UserContext} from "./user-context";
import {BehaviorSubject, map} from "rxjs";
import {LoginResponse, LoginService} from "./login.service";
import AuthUtils from "./auth.utils";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: UserContext = new UserContext();
  private user$: BehaviorSubject<UserContext> = new BehaviorSubject<UserContext>(new UserContext());

  constructor(
    private loginService: LoginService
  ) {
    let localAuth = AuthUtils.getUserContextFromLocalStorage();
    if (localAuth) {
      this.setUserContext(localAuth);
    }
  }

  getCurrentUserContext() {
    return this.user;
  }

  hasAnyRole(roles: string[] = []): boolean {
    return this.getCurrentUserContext().roles.some(role => roles.indexOf(role) != -1);
  }


  isUserAuthenticatedAsObservable() {
    return this.user$.pipe(
      map(userContext => userContext.isAuthenticated)
    );
  }


  getUserContext(): BehaviorSubject<UserContext> {
    return this.user$;
  }

  login(username: string, password: string) {
    return this.loginService.login(username, password)
      .pipe(map(tokenData => this.onLoginSuccessCallback(tokenData)));
  }

  loginAsGuest() {
    return this.loginService.loginAsGuest()
      .pipe(map(tokenData => this.onLoginSuccessCallback(tokenData)));
  }

  logout() {
    AuthUtils.removeUserContextFromLocalStorage();
    this.setUserContext(new UserContext());
  }

  private onLoginSuccessCallback(tokenData: LoginResponse) {
    let userContext = new UserContext(
      tokenData.name,
      true,
      tokenData.authorities,
      tokenData.token,
      tokenData.expiredAt);

    AuthUtils.saveUserContextInLocalStorage(userContext)

    this.setUserContext(userContext)

    return userContext;
  }

  private setUserContext(userContext: UserContext) {
    this.user$.next(userContext);
    this.user = userContext;
  }

}
