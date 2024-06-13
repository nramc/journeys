import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {AppUser} from "../../model/account/app-user";

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  getProfileData(): Observable<AppUser> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<AppUser>(environment.journeyApi + '/my-account', {
      headers: {'Authorization': `Bearer ${userContext.accessToken}`}
    });
  }

  saveProfileData(profileData: AppUser) {
    console.log(profileData);
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.post<void>(environment.journeyApi + '/my-account', profileData, {
      headers: {
        'Authorization': `Bearer ${userContext.accessToken}`,
        'Content-Type': 'application/json'
      },
    });
  }
}
