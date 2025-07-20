import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Statistics} from "./statistics.type";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private readonly httpClient = inject(HttpClient);
  private readonly authService = inject(AuthService);

  getStatistics(): Observable<Statistics> {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<Statistics>(environment.journeyApi + '/journeys/statistics',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`}
      });
  }

}
