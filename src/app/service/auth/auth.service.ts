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

  loginAsGuest() {
    return this.loginService.loginAsGuest()
      .pipe(map(tokenData => this.getUserContextForSuccessfulLogin(tokenData)));
  }

  logout() {
    AuthUtils.removeUserContextFromLocalStorage();
    this.setUserContext(new UserContext());
  }

  public getUserContextForSuccessfulLogin(loginResponse: LoginResponse) {
    let userContext = new UserContext(
      loginResponse.name,
      true,
      loginResponse.authorities,
      loginResponse.token,
      loginResponse.expiredAt);

    this.setUserContext(userContext);
    return userContext;
  }

  public setUserContext(userContext: UserContext) {
    this.user$.next(userContext);
    this.user = userContext;
    AuthUtils.saveUserContextInLocalStorage(userContext)
  }

}
