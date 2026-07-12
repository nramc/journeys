import {inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountRecoveryService {
  private readonly httpClient = inject(HttpClient);

  requestRecovery(username: string) {
    return this.httpClient.post<void>(environment.journeyApi + '/account/recover', {
      'username': username
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

}
