import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmailConfirmationCodeService {
  private httpClient: HttpClient = inject(HttpClient);
  private authService: AuthService = inject(AuthService);

  sendConfirmationCode() {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.post<void>(environment.journeyApi + '/sendEmailCode', {}, {
      headers: {
        'Authorization': `Bearer ${userContext.accessToken}`
      },
    });
  }

  verifyConfirmationCode(code: string) {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.post<void>(environment.journeyApi + '/verifyEmailCode', {
      code: code
    }, {
      headers: {
        'Authorization': `Bearer ${userContext.accessToken}`
      },
    });
  }

}
