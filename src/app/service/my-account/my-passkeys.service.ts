import {inject, Injectable} from '@angular/core';
import {
  PublicKeyCredentialCreationOptionsJSON,
  PublicKeyCredentialRequestOptionsJSON
} from "@github/webauthn-json/src/webauthn-json/basic/json";
import {from, switchMap, tap} from "rxjs";
import * as webauthnJson from "@github/webauthn-json";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {v4 as uuidv4} from 'uuid';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class MyPasskeysService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly authService: AuthService = inject(AuthService);


  register() {
    const userContext = this.authService.getCurrentUserContext();
    const headers = {headers: {'Authorization': `Bearer ${userContext.accessToken}`}};

    return this.http.post<PublicKeyCredentialCreationOptionsJSON>(
      `${environment.journeyBaseUrl}/webauthn/register/start`, {flowID: uuidv4()}, headers)
      .pipe(
        tap(res => console.log('Credential options received:', res)),
        switchMap((credentialCreateOptions) =>
          from(webauthnJson.create({publicKey: credentialCreateOptions})).pipe(
            tap(attestation => console.log('Attestation object:', attestation)),
            switchMap((attestation) => this.http.post<boolean>(`${environment.journeyBaseUrl}/webauthn/register/finish`, attestation, headers))
          )
        )
      );
  }

  login(username: string) {

    return this.http.post<PublicKeyCredentialRequestOptionsJSON>(
      `${environment.journeyBaseUrl}/webauthn/authenticate/start`,
      {username: username},
      {params: {username: username}}
    ).pipe(
      tap(optionsResponse => console.log('Authentication options received:', optionsResponse)),
      switchMap((optionsResponse) => from(webauthnJson.get({publicKey: optionsResponse}))),
      tap(assertion => console.log('Assertion object:', assertion)),
      switchMap((assertion) => this.http.post(`${environment.journeyBaseUrl}/webauthn/authenticate/finish`, assertion))
    );
  }
}
