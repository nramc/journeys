import {Injectable} from '@angular/core';
import {UserContext} from "./user-context";
import {BehaviorSubject, map} from "rxjs";
import {LoginResponse} from "./login.service";
import AuthUtils from "./auth.utils";
import {Role} from "./role";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: UserContext = new UserContext();
  private readonly user$: BehaviorSubject<UserContext> = new BehaviorSubject<UserContext>(new UserContext());

  constructor() {
    const localAuth = AuthUtils.getUserContextFromLocalStorage();
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

  hasAuthenticatedRole(): boolean {
    return this.getCurrentUserContext().roles.some(role => role === Role.AUTHENTICATED_USER);
  }


  isUserAuthenticatedAsObservable() {
    return this.user$.pipe(
      map(userContext => userContext.isAuthenticated)
    );
  }

  getUserContext(): BehaviorSubject<UserContext> {
    return this.user$;
  }

  logout() {
    AuthUtils.removeUserContextFromLocalStorage();
    this.setUserContext(new UserContext());
  }

  public getUserContextForSuccessfulLogin(loginResponse: LoginResponse) {
    const userContext = new UserContext(
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
