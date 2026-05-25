import {inject, Injectable} from '@angular/core';
import {from, switchMap, tap} from "rxjs";
import {startAuthentication, startRegistration} from "@simplewebauthn/browser";
import type {
  PublicKeyCredentialCreationOptionsJSON,
  PublicKeyCredentialRequestOptionsJSON
} from "@simplewebauthn/browser";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {v4 as uuidv4} from 'uuid';
import {environment} from "../../../environments/environment";
import {LoginResponse} from "../auth/login.service";

/**
 * BFF response shape for registration start — the server wraps the WebAuthn
 * options inside a `publicKey` field (matching the legacy @github/webauthn-json
 * CredentialCreationOptionsJSON contract).
 */
interface RegistrationOptionsResponse {
  publicKey: PublicKeyCredentialCreationOptionsJSON;
}

/**
 * BFF response shape for authentication start — the server wraps the WebAuthn
 * options inside a `publicKey` field (matching the legacy @github/webauthn-json
 * CredentialRequestOptionsJSON contract).
 */
interface AuthenticationOptionsResponse {
  publicKey: PublicKeyCredentialRequestOptionsJSON;
}


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

    return this.http.post<RegistrationOptionsResponse>(
      `${environment.journeyBaseUrl}/webauthn/register/start`, {flowID: uuidv4()}, headers)
      .pipe(
        tap(res => console.log('Credential options received:', res)),
        switchMap((credentialCreateOptions) =>
          from(startRegistration({optionsJSON: credentialCreateOptions.publicKey})).pipe(
            tap(attestation => console.log('Attestation object:', attestation)),
            switchMap((attestation) => this.http.post<boolean>(`${environment.journeyBaseUrl}/webauthn/register/finish`, attestation, headers))
          )
        )
      );
  }

  login(username: string) {

    return this.http.post<AuthenticationOptionsResponse>(
      `${environment.journeyBaseUrl}/webauthn/authenticate/start`,
      {username: username},
      {params: {username: username}}
    ).pipe(
      tap(optionsResponse => console.log('Authentication options received:', optionsResponse)),
      switchMap((optionsResponse) => from(startAuthentication({optionsJSON: optionsResponse.publicKey}))),
      tap(assertion => console.log('Assertion object:', assertion)),
      switchMap((assertion) => this.http.post<LoginResponse>(`${environment.journeyBaseUrl}/webauthn/authenticate/finish`, assertion))
    );
  }
}
