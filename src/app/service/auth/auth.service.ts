import {Injectable} from '@angular/core';
import {UserContext} from "./user-context";
import {BehaviorSubject, map} from "rxjs";
import {LoginResponse, LoginService} from "./login.service";
import AuthUtils from "./auth.utils";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$: BehaviorSubject<UserContext> = new BehaviorSubject<UserContext>(new UserContext());

  constructor(
    private loginService: LoginService
  ) {
    let localAuth = AuthUtils.getUserContextFromLocalStorage();
    if (localAuth) {
      this.user$.next(localAuth);
    }
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
      .pipe(map(tokenData => this.onLoginSuccessCallback(username, tokenData)));
  }

  private onLoginSuccessCallback(username: string, tokenData: LoginResponse) {
    let userContext = new UserContext(
      username,
      true,
      tokenData.authorities,
      tokenData.token,
      tokenData.expiredAt);
    AuthUtils.saveUserContextInLocalStorage(userContext)
    this.user$.next(userContext);
    return userContext;
  }

}
