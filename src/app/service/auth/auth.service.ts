import {Injectable} from '@angular/core';
import {UserContext} from "./user-context";
import {BehaviorSubject, map} from "rxjs";
import {LoginResponse, LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private USER_CONTEXT_KEY: string = '_auth';
  private user$: BehaviorSubject<UserContext> = new BehaviorSubject<UserContext>(new UserContext());

  constructor(
    private loginService: LoginService
  ) {
    let localAuth = localStorage.getItem(this.USER_CONTEXT_KEY);
    if (localAuth) {
      let localUserContext = JSON.parse(localAuth) as UserContext;
      if (new Date() < localUserContext.expiredAt) {
        this.user$.next(localUserContext);
        console.log('Local auth context found and valid.', localAuth);
      } else {
        localStorage.removeItem(this.USER_CONTEXT_KEY);
        console.log('Local auth context found, but not valid. Thus removed from local storage.', localAuth);
      }
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
    localStorage.setItem(this.USER_CONTEXT_KEY, JSON.stringify(userContext));
    this.user$.next(userContext);
    return userContext;
  }

}
