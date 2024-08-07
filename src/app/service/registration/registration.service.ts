import {inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private httpClient = inject(HttpClient);

  signup(request: SignupRequest) {
    return this.httpClient.post<void>(environment.journeyApi + '/signup', request, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  activate(activationRequest: AccountActivationRequest) {
    return this.httpClient.post<void>(environment.journeyApi + '/activate', activationRequest, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

}

export interface AccountActivationRequest {
  username: string;
  emailToken: string,
  apiVersion: string
}

export interface SignupRequest {
  username: string,
  password: string,
  name: string
}
