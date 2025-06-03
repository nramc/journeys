import {inject, Injectable} from '@angular/core';
import {CredentialCreationOptionsJSON} from "@github/webauthn-json/src/webauthn-json/basic/json";
import {from, switchMap, tap} from "rxjs";
import * as webauthnJson from "@github/webauthn-json";
import {CredentialRequestOptionsJSON} from "@github/webauthn-json";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {v4 as uuidv4} from 'uuid';
import {environment} from "../../../environments/environment";
import {LoginResponse} from "../auth/login.service";


export interface CredentialInfo {
  credentialId: string;
  userHandle: string;
  name: string;
  createdAt: Date;
  deviceInfo: string;
}

@Injectable({
  providedIn: 'root'
})
export class MyPasskeysService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly authService: AuthService = inject(AuthService);

  list() {
    const userContext = this.authService.getCurrentUserContext();
    const headers = {headers: {'Authorization': `Bearer ${userContext.accessToken}`}};

    return this.http.get<CredentialInfo[]>(
      `${environment.journeyBaseUrl}/webauthn/credentials`, headers
    ).pipe(
      tap(credentials => console.log('Credentials retrieved:', credentials))
    );
  }

  remove(id: string) {
    const userContext = this.authService.getCurrentUserContext();
    const options = {
      headers: {'Authorization': `Bearer ${userContext.accessToken}`},
      params: {credentialId: id}
    };

    return this.http.delete<boolean>(`${environment.journeyBaseUrl}/webauthn/credentials`, options)
      .pipe(
        tap(success => console.log('Credential removed:', success))
      );
  }

  register() {
    const userContext = this.authService.getCurrentUserContext();
    const headers = {headers: {'Authorization': `Bearer ${userContext.accessToken}`}};

    return this.http.post<CredentialCreationOptionsJSON>(
      `${environment.journeyBaseUrl}/webauthn/register/start`, {flowID: uuidv4()}, headers)
      .pipe(
        tap(res => console.log('Credential options received:', res)),
        switchMap((credentialCreateOptions) =>
          from(webauthnJson.create(credentialCreateOptions)).pipe(
            tap(attestation => console.log('Attestation object:', attestation)),
            switchMap((attestation) => this.http.post<boolean>(`${environment.journeyBaseUrl}/webauthn/register/finish`, attestation, headers))
          )
        )
      );
  }

  login(username: string) {

    return this.http.post<CredentialRequestOptionsJSON>(
      `${environment.journeyBaseUrl}/webauthn/authenticate/start`,
      {username: username},
      {params: {username: username}}
    ).pipe(
      tap(optionsResponse => console.log('Authentication options received:', optionsResponse)),
      switchMap((optionsResponse) => from(webauthnJson.get(optionsResponse))),
      tap(assertion => console.log('Assertion object:', assertion)),
      switchMap((assertion) => this.http.post<LoginResponse>(`${environment.journeyBaseUrl}/webauthn/authenticate/finish`, assertion))
    );
  }
}
