import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {AppUser} from "../../model/account/app-user";
import {QrCodeData} from "../../model/account/qr-code-data";
import {TotpActivation} from "./totp-activation";
import {TotpStatus} from "./totp-status";
import {TotpCodeVerification} from "./totp-code-verification";

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {
  private readonly httpClient = inject(HttpClient);
  private readonly authService = inject(AuthService);

  getProfileData(): Observable<AppUser> {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<AppUser>(environment.journeyApi + '/my-account', {
      headers: {'Authorization': `Bearer ${userContext.accessToken}`}
    });
  }

  saveProfileData(profileData: AppUser) {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.post<void>(environment.journeyApi + '/my-account', profileData, {
      headers: {
        'Authorization': `Bearer ${userContext.accessToken}`,
        'Content-Type': 'application/json'
      },
    });
  }

  deleteMyAccount() {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.delete<void>(environment.journeyApi + '/my-account', {
      headers: {
        'Authorization': `Bearer ${userContext.accessToken}`,
        'Content-Type': 'application/json'
      },
    });
  }

  generateNewQRCode() {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<QrCodeData>(environment.journeyApi + '/my-account/securityAttribute/totp', {
      headers: {'Authorization': `Bearer ${userContext.accessToken}`}
    });
  }

  activateTotp(activationRequest: TotpActivation) {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.post(environment.journeyApi + '/my-account/securityAttribute/totp', activationRequest, {
      headers: {
        'Authorization': `Bearer ${userContext.accessToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  getTotpStatus() {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TotpStatus>(environment.journeyApi + '/my-account/securityAttribute/totp/status', {
      headers: {'Authorization': `Bearer ${userContext.accessToken}`}
    });
  }

  verifyTotpCode(code: string) {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.post<TotpCodeVerification>(environment.journeyApi + '/my-account/securityAttribute/totp/verify', {
      code: code
    }, {
      headers: {
        'Authorization': `Bearer ${userContext.accessToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  deactivateTotp() {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.delete(environment.journeyApi + '/my-account/securityAttribute/totp', {
      headers: {'Authorization': `Bearer ${userContext.accessToken}`}
    });
  }

  changeMfaStatus(status: boolean) {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.post(environment.journeyApi + '/my-account/securityAttribute/mfa', {
      status: status
    }, {
      headers: {'Authorization': `Bearer ${userContext.accessToken}`}
    });
  }

  changePassword(newPassword: string) {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.post(environment.journeyApi + '/my-account/changePassword', {
      newPassword: newPassword
    }, {
      headers: {'Authorization': `Bearer ${userContext.accessToken}`}
    });
  }

}
