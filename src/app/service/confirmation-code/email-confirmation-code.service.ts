import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {environment} from "../../../environments/environment";
import {Credential} from "../auth/login.service";

@Injectable({
  providedIn: 'root'
})
export class EmailConfirmationCodeService {
  private httpClient: HttpClient = inject(HttpClient);
  private authService: AuthService = inject(AuthService);

  sendConfirmationCode(credential: Credential) {
    const userContext = this.authService.getCurrentUserContext();
    const authCredential = credential ? 'Basic ' + btoa(credential.username + ':' + credential.password)
      : `Bearer ${userContext.accessToken}`;
    return this.httpClient.post<void>(environment.journeyApi + '/sendEmailCode', {}, {
      headers: {
        'Authorization': authCredential
      },
    });
  }

  verifyConfirmationCode(code: string) {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.post<void>(environment.journeyApi + '/verifyEmailCode', {
      code: code
    }, {
      headers: {
        'Authorization': `Bearer ${userContext.accessToken}`
      },
    });
  }

}
