import {inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Role} from "./role";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly httpClient = inject(HttpClient);

  login(credential: Credential) {
    return this.httpClient.post<LoginResponse>(environment.journeyApi + '/login', {
      'username': credential.username,
      'password': credential.password
    }, {
      headers: {
        'Authorization': 'Basic ' + btoa(credential.username + ':' + credential.password),
        'Content-Type': 'application/json'
      }
    });
  }

  mfa(confirmationCode: string, confirmationType: SecurityAttribute, credential: Credential) {
    return this.httpClient.post<LoginResponse>(environment.journeyApi + '/mfa', {
      'type': confirmationType,
      'value': confirmationCode
    }, {
      headers: {
        'Authorization': 'Basic ' + btoa(credential.username + ':' + credential.password),
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

export interface Credential {
  username: string,
  password: string
}

export type SecurityAttribute = 'EMAIL_ADDRESS' | 'TOTP';

export interface LoginResponse {
  token: string,
  expiredAt: Date,
  authorities: Role[],
  name: string,
  additionalFactorRequired: boolean,
  securityAttributes: SecurityAttribute[]
}
