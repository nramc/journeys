import {Injectable} from '@angular/core';
import {UserContext} from "./user-context";
import {BehaviorSubject, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$: BehaviorSubject<UserContext> = new BehaviorSubject<UserContext>(new UserContext());


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
    this.user$.next(loggedInContext);
  }

}
