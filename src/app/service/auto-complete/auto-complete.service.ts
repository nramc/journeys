import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  getAvailableCategories(text: string): Observable<string[]> {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<string[]>(environment.journeyApi + '/categories',
      {
        params: {
          'text': text
        },
        headers: {
          'Content-Type': 'application/vnd.journey.api.basic.v1+json',
          'Authorization': `Bearer ${userContext.accessToken}`,
          'X-Async-Process': 'true'
        }
      });
  }
}
