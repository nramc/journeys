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
      console.log('Local auth context found.', localAuth);
      let localContext = JSON.parse(localAuth);
      this.user$.next(localContext);
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

  onLoginSuccessCallback(username: string, tokenData: LoginResponse) {
    let userContext = new UserContext(username, true, tokenData.authorities, tokenData.token);
    localStorage.setItem(this.USER_CONTEXT_KEY, JSON.stringify(userContext));
    this.user$.next(userContext);
    return userContext;
  }

}
