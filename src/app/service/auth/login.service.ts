import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Role} from "./role";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  login(username: string, password: string) {
    return this.httpClient.post<LoginResponse>(environment.journeyApi + '/login', {
      'username': username,
      'password': password
    }, {
      headers: {
        'Authorization': 'Basic ' + btoa(username + ':' + password),
        'Content-Type': 'application/json'
      }
    });
  }

  loginAsGuest() {
    return this.httpClient.post<LoginResponse>(environment.journeyApi + '/guestLogin', {
      'username': Math.random().toString(36)
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

}

export interface LoginResponse {
  token: string,
  expiredAt: Date,
  authorities: Role[],
  name: string
}
