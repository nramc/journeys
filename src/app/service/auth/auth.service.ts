import {Injectable} from '@angular/core';
import {UserContext} from "./user-context";
import {BehaviorSubject, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private USER_CONTEXT_KEY: string = '_auth';
  private user$: BehaviorSubject<UserContext> = new BehaviorSubject<UserContext>(new UserContext());

  constructor() {
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

  login() {
    let loggedInContext = new UserContext(
      'username',
      true,
      ['authenticated', 'admin'],
      'jwt');
    localStorage.setItem(this.USER_CONTEXT_KEY, JSON.stringify(loggedInContext));
    this.user$.next(loggedInContext);
  }

}
